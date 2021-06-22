import React from 'react';
import ReadMore from '../ReadMore';
import ReadMoreWhite from '../ReadMoreWhite';
import BestPackageCard from './BestPackageCard';
import PackageCard from './PackageCard';

const PackageOffers = () => {
  return (
    <div className='package-offers padding-x'>
      <PackageCard />
      <BestPackageCard />
      <PackageCard />
    </div>
  );
};

export default PackageOffers;
