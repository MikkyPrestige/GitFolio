// CONTACT COMPONENT- This component is used to display my contact info

import React from 'react';

const Contact = () => {

  return (
    <section className='contact'>
      <h1 className='contact--heading'>Reach me on any of this</h1>
      <div className='contact-links'>
      <p>Phone: 08030849685</p>
      <p><a href='mailto: meekyberry6@gmail.com'>Gmail</a></p>
      <p><a href='https://github.com/MeekyBerry'>Github</a></p>
      <p><a href='https://www.linkedin.com/in/mikkylanky/'>LinkedIn</a></p>
      <p><a href='https://replit.com/@meekyberry'>Replit</a></p>
      <p><a href='https://leetcode.com/meekyberry/'>LeetCode</a></p>
      </div>
    </section>
  );
};

export default Contact;
