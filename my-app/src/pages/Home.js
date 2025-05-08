import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaSoap, FaPumpSoap, FaBoxOpen } from 'react-icons/fa';
import { Client, Databases } from 'appwrite';
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';


// Initialize Appwrite Client
const appwriteClient = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite endpoint
  .setProject('681b7d590038bcdd6861'); // Your Appwrite project ID

const databases = new Databases(appwriteClient);

// Initialize Supabase Client
const supabase = createClient('https://your-project-url.supabase.co', 'your-anon-key'); // Your Supabase URL and key

const DATABASE_ID = '681b7d86000f1974effd';
const COLLECTION_ID = '681b7d920009adfa3e92';

function Home() {
  const [productsByCategory, setProductsByCategory] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("Fetching products from Appwrite...");
        // Fetch product data from Appwrite
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        const grouped = {};

        for (const product of response.documents) {
          const { category, name, description, wholesalePrice, retailPrice, imageId, subcategory } = product;

          console.log(`Product: ${name}, Image ID: ${imageId}`); // Log imageId for debugging

          // Check if the imageId is a valid URL
          const imageUrl = isValidUrl(imageId) ? imageId : await getImageUrl(imageId);

          console.log(`Fetched image URL for ${name}: ${imageUrl}`); // Log the image URL

          if (!grouped[category]) grouped[category] = {};
          if (!grouped[category][subcategory || 'General']) grouped[category][subcategory || 'General'] = [];

          grouped[category][subcategory || 'General'].push({
            name,
            description: `${description}\nWholesale: ₹${wholesalePrice} | Retail: ₹${retailPrice}`,
            image: imageUrl, // Use the retrieved image URL here
            icon: getIcon(category),
          });
        }

        setProductsByCategory(grouped);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const getImageUrl = async (imageId) => {
    try {
      // Fetch the public URL of the image from Supabase Storage using the imageId from Appwrite
      console.log(`Fetching image from Supabase with imageId: ${imageId}`);
      const { publicURL, error } = supabase
        .storage
        .from('products') // Replace with your Supabase bucket name
        .getPublicUrl(imageId);

      if (error) throw error;

      console.log(`Fetched image URL from Supabase: ${publicURL}`);
      return publicURL; // Return the public URL
    } catch (error) {
      console.error('Error retrieving image:', error);
      return 'default-image-url.jpg'; // Return a default image if an error occurs
    }
  };

  function getIcon(category) {
    switch (category) {
      case 'Soap': return <FaSoap />;
      case 'Detergent': return <FaPumpSoap />;
      default: return <FaBoxOpen />;
    }
  }
  const handleProductClick = (item) => {
    Swal.fire({
      title: item.name,
      html: `<p style="text-align:left;">${item.description.replace(/\n/g, '<br>')}</p>`,
      imageUrl: item.image || 'default-image-url.jpg',
      imageWidth: 200,
      imageHeight: 200,
      imageAlt: item.name,
      showCancelButton: true,
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      background: 'rgba(219, 143, 247, 0.84)', // semi-transparent dark background
      color: '#ffffff',
      confirmButtonColor: '#4CAF50',
      cancelButtonColor: '#d33',
      customClass: {
        popup: 'product-popup'
      }
    });
  };
  
  
  

  return (
    <div className="home" style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/BG/home-bg.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <h1 className="section-title">Our Products</h1>

      {Object.entries(productsByCategory).map(([category, subcategories]) => (
        <section key={category} className="category-section">
          <h2 className="category-title">{category}</h2>
          {Object.entries(subcategories).map(([subcategory, items]) => (
            <div key={subcategory}>
              <div className="product-grid">
                {items.map((item, index) => (
                  <div
                  key={index}
                  className="product-card"
                  onClick={() => handleProductClick(item)}
                >
                    <div className="product-img-container">
                      <img
                        src={item.image || 'default-image-url.jpg'} // Use default image if image is null
                        alt={item.name}
                        className="product-img"
                      />
                    </div>
                    <div className="product-info">
                      <h4>{item.icon} {item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}

export default Home;
