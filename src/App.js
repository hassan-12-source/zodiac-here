import React, { useState, useEffect } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import card from './Components/Services/data';
import Zodiac from './Components/Zodiac/Zodiac';
import pricingCard from './Components/Pricing/data';
import zodiacCard from './Components/Zodiac/data';
import Testimonials from './Components/Testimonials/Testimonials';
import testimonialsCard from './Components/Testimonials/data';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App">
          <Navbar />
          <Hero />
          <Services data={card} />
          <Zodiac data={zodiacCard} />
          <Pricing data={pricingCard} />
          <Testimonials data={testimonialsCard} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
