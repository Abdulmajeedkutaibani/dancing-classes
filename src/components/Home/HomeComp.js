import React from 'react';
import Discover from '../Discover';

import HomeImage from './home-image.png';

const Home = () => {
  return (
    <section className='home padding-x'>
      <div className='col-1'>
        <Discover />
      </div>
      <div className='col-2'>
        <img src={HomeImage} alt='' />
        <div className='circle-1'></div>
        <div className='circle-3'></div>
        <div className='circle-4'></div>
      </div>
    </section>
  );
};

export default Home;
