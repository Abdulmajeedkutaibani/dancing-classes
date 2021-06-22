import React from 'react';

import PinkBtn from '../PinkBtn';
import Title from '../Title';

const ContactForm = () => {
  return (
    <>
      <div className='contact-form padding-x'>
        <span>contact us</span>
        <Title title='sign up for your first lesson' />
        <div className='name-email-inputs'>
          <input placeholder='Full name' type='text' className='name-input' />
          <input placeholder='E-mail' type='text' className='email-input' />
        </div>
        <input
          placeholder='Your message'
          type='text'
          className='message-input'
        />
        <div className='submit-btn'>
          <PinkBtn text='Submit' />
        </div>
        <div className='circle-1'></div>
        <div className='circle-2'></div>
        <div className='circle-3'></div>
        <div className='circle-4'></div>
      </div>
    </>
  );
};

export default ContactForm;
