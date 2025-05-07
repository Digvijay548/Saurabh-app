import React from 'react';
import './Home.css';
import { FaSoap, FaPumpSoap, FaBoxOpen } from 'react-icons/fa';

const productData = {
  Soap: {
    'Cloth Cleaning': [
      {
        name: 'Ditergent Cake Blue',
        description: 'Available in 90GM, 200GM, 250GM',
        image: `${process.env.PUBLIC_URL}/img/cake/DCb.png`,
        icon: <FaSoap />,
      },
      {
        name: 'Ditergent Cake Green',
        description: 'Available in 90GM, 200GM, 250GM',
        image: `${process.env.PUBLIC_URL}/img/cake/DCg.png`,
        icon: <FaSoap />,
      },
       {
        name: 'Ditergent Cake Orange',
        description: 'Available in 90GM, 200GM, 250GM',
        image: `${process.env.PUBLIC_URL}/img/cake/DCo.png`,
        icon: <FaSoap />,
      },
    ],
    'Bartan Bar': [
      {
        name: 'Laxmi Dish Wash Cake Green',
        description: 'Available in 90GM, 200GM',
        image: `${process.env.PUBLIC_URL}/img/Bartan/DWG.png`,
        icon: <FaSoap />,
      },
      {
        name: 'Laxmi Dish Wash Cake Pink',
        description: 'Available in 90GM, 200GM',
        image: `${process.env.PUBLIC_URL}/img/Bartan/DWP.png`,
        icon: <FaSoap />,
      },
      {
        name: 'Laxmi Dish Wash Cake Yellow',
        description: 'Available in 90GM, 200GM',
        image: `${process.env.PUBLIC_URL}/img/Bartan/DWY.png`,
        icon: <FaSoap />,
      },
    ]
  },
  Detergent: [
    {
      name: 'Laxmi Detergent Powder Blue',
      description: 'Available In 110GM, 500GM, 1KG, 1.5KG, 5KG.',
      image: `${process.env.PUBLIC_URL}/img/Detergent/DTPB.png`,
      icon: <FaPumpSoap />,
    },
    {
      name: 'Laxmi Detergent Powder Green',
      description: 'Available In 110GM, 500GM, 1KG, 1.5KG, 5KG.',
      image: `${process.env.PUBLIC_URL}/img/Detergent/DTPG.png`,
      icon: <FaPumpSoap />,
    },
    {
      name: 'Laxmi Detergent Powder Pink',
      description: 'Available In 110GM, 500GM, 1KG, 1.5KG, 5KG.',
      image: `${process.env.PUBLIC_URL}/img/Detergent/DTPP.png`,
      icon: <FaPumpSoap />,
    }
  ],
  Other: [
    {
      name: 'Pitambari',
      description: 'For shining copper & brass utensils.',
      image: 'https://via.placeholder.com/400x250?text=Pitambari',
      icon: <FaBoxOpen />,
    },
    {
      name: 'Scrub Brush',
      description: 'For multipurpose cleaning.',
      image: 'https://via.placeholder.com/400x250?text=Brush',
      icon: <FaBoxOpen />,
    }
  ]
};

function Home() {
  return (
    <div className="home"  style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/BG/home-bg.jpg)`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }}>
      <h1 className="section-title">Our Products</h1>

      {/* Soap section with subcategories */}
      <section className="category-section">
        <h2 className="category-title">Soap</h2>
        {Object.entries(productData.Soap).map(([subcategory, items]) => (
          <div key={subcategory}>
            <h3 className="subcategory-title">{subcategory}</h3>
            <div className="product-grid">
              {items.map((item, index) => (
                <div className="product-card">
                  <div className="product-img-container">
                    <img src={item.image} alt={item.name} className="product-img" />
                  </div>
                  <div className="product-info">
                    <h4 className="category-title">{item.icon} {item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>

              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Detergent section */}
      <section className="category-section">
  <h2 className="category-title">Detergent</h2>
  <div className="product-grid">
    {productData.Detergent.map((item, index) => (
      <div key={index} className="product-card">
        <div className="product-img-container">
          <img src={item.image} alt={item.name} className="product-img" />
        </div>
        <div className="product-info">
          <h4 className="category-title">{item.icon} {item.name}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Other section */}
      <section className="category-section">
        <h2 className="category-title">Other Products</h2>
        <div className="product-grid">
          {productData.Other.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} className="product-img" />
              <div className="product-info">
                <h4>{item.icon} {item.name}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
