import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import Booking from './components/Booking';
import Comments from './components/Comments';
import Location from './components/Location';

function App() {
  return (
    <div>
      <Header />
      <Services />
      <Gallery />
      <Schedule />
	  <Location />
      <Booking />
      <Comments />
      <Footer />
    </div>
  );
}

export default App;
