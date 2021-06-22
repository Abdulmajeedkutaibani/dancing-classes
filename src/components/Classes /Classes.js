import React from 'react';
import DanceClass from './DanceClass';
import hiphopPhoto from './hiphop.svg';
import salsaPhoto from './salsa.svg';
import jazzPhoto from './jazz-funk.svg';

const hiphopClass = {
  photo: hiphopPhoto,
  title: 'hip hop',
  date: 'Monday @ 7:00 PM',
  location: '14 Greenside St',
};
const salsaClass = {
  photo: salsaPhoto,
  title: 'salsa',
  date: 'thursday @ 6:30 PM',
  location: '21 Wellington St',
};
const jazzClass = {
  photo: jazzPhoto,
  title: 'Jazz-funk',
  date: 'Wednesday @ 8:00 PM',
  location: '21 Wellington St',
};

const Classes = () => {
  return (
    <div className='classes padding-x'>
      <DanceClass
        photo={hiphopClass.photo}
        title={hiphopClass.title}
        date={hiphopClass.date}
        location={hiphopClass.location}
      />
      <DanceClass
        photo={salsaClass.photo}
        title={salsaClass.title}
        date={salsaClass.date}
        location={salsaClass.location}
      />
      <DanceClass
        photo={jazzClass.photo}
        title={jazzClass.title}
        date={jazzClass.date}
        location={jazzClass.location}
      />
    </div>
  );
};

export default Classes;
