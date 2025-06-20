import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/header/Header.jsx'

import Infrastructure from './components/infrastructure/Infrastructure.jsx'; // example
import Toppers from './components/toppers/Toppers.jsx'
import Home from './components/Home/Home.jsx';
import Footer from './components/footer/Footer.jsx'
import  ScrollToTop from './components/Scroll/Scroll.jsx'


import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <>
    <Header />
    {/* < ScrollToTop/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Infrastructure" element={<Infrastructure/>}/>
      <Route path="/Toppers" element={<Toppers/>}/>
    </Routes>
    <Footer/>

    </>
    
  );
}

export default App