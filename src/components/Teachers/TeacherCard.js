import React from 'react';
import TeacherPhoto from './TeacherPhoto';

const TeacherCard = ({ image, name, speciality }) => {
  return (
    <div className='teacher-card'>
      <TeacherPhoto image={image} />
      <h1 className='teacher-name'>{name}</h1>
      <span className='teacher-speciality'>{speciality}</span>
    </div>
  );
};

export default TeacherCard;
