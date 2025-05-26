import NavBar from "./NavBar";
import Footer from "./Footer";

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactSection />
      <Footer />
    </>
  );
}

export default ContactPage;

function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject:'',
    product:'',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, 'contacts'), formData);
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', subject: '', product:'', messege: '', }); // Reset form
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
        <h1 className="text-md text-gray-800 mb-6">Fill out the form below and our team will get back to you within 24 hours.</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email@contoh.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Company Name
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Your Company"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
          Product of Interest
          </label>
          <select
            id="product"
            name="product"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
            required
            value={formData.product}
            onChange={handleChange}
          >
            <option value="">Select a product</option>
            <option value="website">Sumatra Mandheling</option>
            <option value="mobile">Java Preanger</option>
            <option value="ecommerce">Bali Kintamani</option>
            <option value="consulting">Flores Bajawa</option>
            <option value="maintenance">Toraja Kalosi</option>
            <option value="other">Lainnya</option>
          </select>
        </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Messege
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent resize-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </>
  );
}
