/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../components/Banner';
import Banner_two from '../components/Banner_two';
import MenuPalatte from '../components/MenuPalatte';
import ChefsWord from '../components/ChefsWord';
import Video from '../components/Video';
import Banner_Three from '../components/Banner_Three';
import PhotoGallery from '../components/PhotoGallery';
import Contact from '../components/Contact';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <div>
          <Banner/>
          <Banner_two/>
          <MenuPalatte/>
          <ChefsWord/>
          <Video/>
          <Banner_Three/>
          <PhotoGallery/>
          <Contact/>
          <NewsLetter/>
        </div>
    );
};

export default Home;