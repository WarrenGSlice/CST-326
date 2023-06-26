import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

// npm i @emailjs/browser
// npm install --save react-helmet

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfaie5e', 'template_e2bmfsv', form.current, 'UwWYiIhpXcNiWeZ0p')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  const TITLE = "Contact Us";
  return (
    <><>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>{TITLE}</title>
      </Helmet>
    </><div className='app__contact'>
        <div className="app__contact-container">
          <div className='app__contact-content'>
            <div className='app__contact-heading'>
              <h1>Tasty Bites Wants Your Feedback!</h1>
            </div>
            <br></br><br></br>
            <form ref={form} onSubmit={sendEmail} class='app__contact-form'>

              <input type="text" name="user_name" class='user_name' placeholder='What is your name?' />
              <br></br>

              <input type="email" name="user_email" class='user_email' placeholder='What is your email?' />
              <br></br>

              <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="user_message" required></textarea>
              <input type="submit" class="app__contact-btn" value="Send" />
            </form>
          </div>
        </div>
      </div></>
  )
}

export default Contact
