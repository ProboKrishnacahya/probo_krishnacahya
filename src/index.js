import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Articles, Contacts, Home, PageNotFound, Posts1, Projects, Skills } from "./script/export";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/klasifikasi-tingkat-keganasan-kanker-payudara-menggunakan-algoritma-k-nearest-neighbors" element={<Posts1 />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </Router>
);

// * Web Preload
const preload = document.querySelector('#preload');

window.addEventListener('load', function () {
  preload.classList.add('fade-out');
});

// * Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refreshHard();

// * Measuring performance
reportWebVitals();