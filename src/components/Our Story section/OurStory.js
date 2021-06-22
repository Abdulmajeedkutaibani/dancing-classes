import React from 'react';
import PhotoWithShadow from '../PhotoWithShadow';
import OurStoryInfo from './OurStoryInfo';

const OurStory = () => {
  return (
    <div className='our-story padding-x'>
      <PhotoWithShadow />

      <OurStoryInfo />
    </div>
  );
};

export default OurStory;
