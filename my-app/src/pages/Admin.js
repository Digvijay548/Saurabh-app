import React, { useState, useEffect } from 'react';
import './Admin.css';
import { Client, Databases, ID } from 'appwrite';
import { createClient } from '@supabase/supabase-js';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';

// --- Appwrite Setup ---
const appwriteClient = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('681b7d590038bcdd6861');

const databases = new Databases(appwriteClient);

const DATABASE_ID = '681b7d86000f1974effd';
const COLLECTION_ID = '681b7d920009adfa3e92';

// --- Supabase Setup ---
const supabase = createClient(
  'https://pfndzvrndhifznlyetjx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmbmR6dnJuZGhpZnpubHlldGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY2MzU2MDUsImV4cCI6MjA2MjIxMTYwNX0.vMuGG_AG9GA94gwYWaHew6lrEjYZAJPngvsegaUtpIA'
);

const BUCKET_NAME = 'products';

// 🔐 Static Credentials
const STATIC_USERNAME = 'balajisoapfactory1000@gmail.com';
const STATIC_PASSWORD = 'Admin@321';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    wholesale: '',
    retail: '',
    image: null
  });

  const fetchProducts = async () => {
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setProducts(res.documents);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const categoryOptions = ["SOAP", "DETERGENT", "BARTAN BAR","Other"];

  const uploadImageToSupabase = async (file) => {
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from(BUCKET_NAME).upload(fileName, file);
    if (error) throw error;
    const { data: publicUrlData } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageId = '';
      if (form.image) {
        const uploadedImageUrl = await uploadImageToSupabase(form.image);
        imageId = uploadedImageUrl;
      }
      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        name: form.name,
        description: form.description,
        retailPrice: parseInt(form.retail),
        wholesalePrice: parseInt(form.wholesale),
        imageId: imageId,
        category: form.category
      });
      //alert('Product added!');
      Swal.fire({
        icon: 'success',
        title: 'Product added!',
        confirmButtonColor: '#3085d6',
      });
      fetchProducts();
      setForm({ name: '', description: '', category: '', subcategory: '', wholesale: '', retail: '', image: null });
    } catch (err) {
      console.error('Error adding product:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error adding product:',
        text: err.toString(),
        confirmButtonColor: '#d33',
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      //alert('Product deleted!');
      Swal.fire({
        icon: 'success',
        title: 'Product deleted!',
        confirmButtonColor: '#3085d6',
      });
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
      Swal.fire({
        icon: 'error',
        title: 'Error deleting product:',
        text: err.toString(),
        confirmButtonColor: '#d33',
      });
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      description: item.description,
      category: item.category,
      wholesale: item.wholesalePrice.toString(),
      retail: item.retailPrice.toString(),
      image: item.imageId
    });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      loginForm.username === STATIC_USERNAME &&
      loginForm.password === STATIC_PASSWORD
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        text: 'Welcome to the Admin Panel 🎉',
        confirmButtonColor: '#3085d6',
      });
      setIsLoggedIn(true);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials',
        text: 'Please check your username or password!',
        confirmButtonColor: '#d33',
      });
    }
  };

  useEffect(() => {
    const isAuth = localStorage.getItem('isLoggedIn');
    if (isAuth === 'true') {
      setIsLoggedIn(true);
    }
    fetchProducts();
  }, []);

  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <h2 className="section-title">Admin Login</h2>
        <form className="admin-form" onSubmit={handleLoginSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={loginForm.username}
            onChange={handleLoginChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleLoginChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1 className="section-title">Admin Panel</h1>

      <form className="admin-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={form.description} onChange={handleChange} required />
        <input name="wholesale" placeholder="Wholesale Price" value={form.wholesale} onChange={handleChange} required />
        <input name="retail" placeholder="Retail Price" value={form.retail} onChange={handleChange} required />

        <label>Category</label>
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          {categoryOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>

        <input type="file" name="image" accept="image/*" onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>

      <div className="product-grid">
        {products.map((item) => (
          <div key={item.$id} className="product-card">
            {item.imageId && (
              <div className="product-img-container">
                <img src={item.imageId} alt={item.name} className="product-img" />
              </div>
            )}
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <small><b>{item.category}</b>{item.subcategory ? ` - ${item.subcategory}` : ''}</small>
            </div>
            <div className="product-actions">
              <button className="action-btn edit-btn" onClick={() => handleEdit(item)}><FaEdit /></button>
              <button className="action-btn delete-btn" onClick={() => handleDelete(item.$id)}><FaTrashAlt /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
