import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Blogs, Posts1, Posts2, Contacts, Home, Projects, Resume, Skills, PageNotFound } from "./script/export";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/klasifikasi-tingkat-keganasan-kanker-payudara-menggunakan-algoritma-k-nearest-neighbors" element={<Posts1 />} />
      <Route path="/blogs/sistem-pendukung-metode-pembelajaran-self-paced-learning-bagi-mahasiswa-di-dalam-kelas-berbasis-web" element={<Posts2 />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </Router>
);

//* Website Preload
const preload = document.querySelector('#preload');

window.addEventListener('load', function () {
  preload.classList.add('fade-out');
});

//* Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refreshHard();

//* Measuring performance
reportWebVitals();