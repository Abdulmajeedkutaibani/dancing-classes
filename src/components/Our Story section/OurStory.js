import React from 'react';
import PhotoWithShadow from '../PhotoWithShadow';
import OurStoryInfo from './OurStoryInfo';
import PictureAndDiv from '../PictureAndDiv';
const OurStory = () => {
  return (
    <div className='our-story padding-x'>
      <PictureAndDiv />

      <OurStoryInfo />
    </div>
  );
};

export default OurStory;
