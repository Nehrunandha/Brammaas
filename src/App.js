import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Header from './components/header/Header.jsx'
import { Routes, Route } from 'react-router-dom';
import Infrastructure from './components/infrastructure/Infrastructure.jsx'; // example
import Home from './components/Home/Home.jsx';
import Footer from './components/footer/Footer.jsx'
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Infrastructure" element={<Infrastructure/>} />
    </Routes>
    <Footer/>
    </>
    
  );
}

export default App