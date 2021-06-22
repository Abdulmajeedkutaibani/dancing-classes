import React from 'react';

const TeacherPhoto = ({ image }) => {
  return (
    <div className='photo-shadow'>
      <div className='teacher-photo'>
        <img src={image} />
      </div>
      <div className='teacher-photo-shadow'></div>
    </div>
  );
};

export default TeacherPhoto;
