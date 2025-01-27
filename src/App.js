import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Service from './pages/Service';
import TeamPage from './pages/TeamPage';
import WhyUs from './pages/WhyUs';
import About from './pages/About';
import Footer from './components/Footer';

// Importing Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Font Awesome CSS
import 'font-awesome/css/font-awesome.min.css';

// Import your custom CSS files
import './css/style.css';
import './css/responsive.css';
import './css/theme.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header appears on all pages */}
        <Header />
        
        {/* Main content with routes */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* Footer appears on all pages, always at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

// Home Page Component
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Service />
      <TeamPage />
      <WhyUs />
      <About />
    </div>
  );
}

export default App;
