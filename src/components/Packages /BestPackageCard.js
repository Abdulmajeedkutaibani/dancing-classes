import React from 'react';
import ReadMore from '../ReadMore';
import ReadMoreWhite from '../ReadMoreWhite';

const BestPackageCard = () => {
  return (
    <div className='package-card best-package'>
      <span className='from'>from</span>
      <h1 className='package-price'>$40</h1>
      <span className='package-title'>basic package</span>
      <p className='package-description'>
        Includes 1 lesson per week, a drop in at any location is possible.
      </p>
      <div>
        <ReadMoreWhite />
      </div>
    </div>
  );
};

export default BestPackageCard;
