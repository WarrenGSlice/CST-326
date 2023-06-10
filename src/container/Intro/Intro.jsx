import React from 'react';

import { burgerVideo } from '../../constants';
import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();


  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={burgerVideo}
        type="video/mp4"
        loop
        controls={false}
        autoPlay
        muted
      />
     
    </div>
  );
};

export default Intro;