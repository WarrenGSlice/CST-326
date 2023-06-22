import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.T} alt="G_overlay" />
    </div>
    <div className="app__aboutus-overlay_T flex__center">
      <img src={images.T} alt="T_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our goal is to provide american food in a fine dining setting. 
        Never before has american food tasted so good. Tasty Bites will make your mouth water
        while overlooking the historic city skyline. Our chefs have worked tirelessly
        for years to create perfection just for you.</p>
        <button type="button" className="custom__button"><a href='/About'>More About Us</a></button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Tasty Bites began in 2012 in the garage of famous jazz musician Felix Federoni. 
        After long music sessions Felix would get hungry and thats when he came up with the idea for Tasty Bites.
        Much like the smooth jazz he's famously known for, his burgers became a huge hit. That was just the start!</p>
        <button type="button" className="custom__button"><a href='/History'>More History</a></button>
      </div>
    </div>
  </div>
);

export default AboutUs;