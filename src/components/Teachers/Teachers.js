import React from 'react';
import TeacherCard from './TeacherCard';
import Teacher1 from './Teacher1.svg';
import Teacher2 from './Teacher2.svg';
import Teacher3 from './Teacher3.svg';
import Teacher4 from './Teacher4.svg';

const teacher1 = {
  image: Teacher1,
  name: 'Jan Pierre',
  speciality: 'Salsa Dance Teacher',
};
const teacher2 = {
  image: Teacher2,
  name: 'Anne Luis',
  speciality: 'Dance Professor',
};
const teacher3 = {
  image: Teacher3,
  name: 'Melisa Jans',
  speciality: 'Hip Hop Teacher',
};
const teacher4 = {
  image: Teacher4,
  name: 'John ben',
  speciality: 'Jazz-Funk Instructor',
};

const Teachers = () => {
  return (
    <div className='teachers padding-x'>
      <TeacherCard
        image={teacher1.image}
        name={teacher1.name}
        speciality={teacher1.speciality}
      />
      <TeacherCard
        image={teacher2.image}
        name={teacher2.name}
        speciality={teacher2.speciality}
      />
      <TeacherCard
        image={teacher3.image}
        name={teacher3.name}
        speciality={teacher3.speciality}
      />
      <TeacherCard
        image={teacher4.image}
        name={teacher4.name}
        speciality={teacher4.speciality}
      />
    </div>
  );
};

export default Teachers;
