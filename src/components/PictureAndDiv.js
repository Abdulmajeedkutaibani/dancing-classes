import React from 'react';
import StoryPhoto from './Our Story section/StoryPhoto.svg';

const PictureAndDiv = () => {
  return (
    <div className='parent'>
      <img className='pic' src={StoryPhoto} />
    </div>
  );
};

export default PictureAndDiv;
