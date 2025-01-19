import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import GroupCounseling from './components/services/groupConsel';
import SixMonthMentorship from './components/services/sixMonth';
import OneOnOneCounseling from './components/services/oneOn';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/one-on-one-counseling" element={<OneOnOneCounseling />} />
        <Route path="/group-counseling" element={<GroupCounseling />} />
        <Route path="/six-month-mentorship" element={<SixMonthMentorship />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;