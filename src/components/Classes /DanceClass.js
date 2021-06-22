import React from 'react';
import ClockIcon from './ClockIcon.svg';
import LocationIcon from './LocationIcon.svg';

const DanceClass = ({ photo, title, date, location }) => {
  return (
    <div className='dance-class'>
      <div className='class-image'>
        <img src={photo} alt='' />
      </div>
      <h1>{title}</h1>
      <div className='time-info'>
        <img src={ClockIcon} alt='' />
        <span>{date}</span>
      </div>
      <div className='location-info'>
        <img src={LocationIcon} alt='' />
        <span>{location}</span>
      </div>
    </div>
  );
};

export default DanceClass;
