import React from 'react';
import StoryPhoto from './Our Story section/StoryPhoto.svg';

const PhotoWithShadow = () => {
  return (
    <div className='parent'>
      <div className='shadow'></div>
      <div className='photo'>
        <img src={StoryPhoto} />
      </div>
    </div>
  );
};

export default PhotoWithShadow;
