import React from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { burgerVideo, meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
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