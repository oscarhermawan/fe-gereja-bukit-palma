import React, { Component } from 'react';
import './App.css'
import Menu from './container/Menu';
// import ImageCarousel from './container/ImageCarousel';
import WartaJemaat from './container/WartaJemaat';
import Footer from './container/Footer';
import CopyRight from './function/CopyRight';
import Quotes from './container/Quotes';
import Gallery from './container/Gallery';

class Beranda extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        {/**<ImageCarousel /> **/}
        <WartaJemaat />
        <Quotes/>
        <Gallery />
        <Footer />
        <CopyRight />
      </div>
    );
  }
}

export default Beranda;
