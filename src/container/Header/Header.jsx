import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the Taste" />
      <h1 className="app__header-h1">Tasty Bites Feels Right</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}> 
        We specialize in a gourmet menu of classic american fare.
        Here at Tasty Bites we pride ourselves in serving the best american classics in an environment that has to be seen to believe.  
        </p>
      <button type="button" className="custom__button"><a href='/Menu'>Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.newwelcome} alt="header_img" />
    </div>
  </div>
);

export default Header;