import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

// npm i @emailjs/browser

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

  return (
    <div className='contact'>
      <div className="container">
        <div className='content'>
            <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <br></br>
            <label>Email</label>
            <input type="email" name="user_email" />
            <br></br>
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
