import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom"
import { images } from '../../constants';
 
const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
})

const Register = () => {

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const [inputs, setInputs] = useState({
      username: "",
      password: "",
    });
    const [err, setError] = useState(null);
    
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await Axios.post("/Register", inputs)
        navigate("/Login");
      } catch (err) {
        setError(err.response.data);
      }
    };

  return (
<div className='app__register'>
  <div className='app__register-body'>
	  <img className="app__register-wave" src="http://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
	<div className="app__register-container">
		<div className="app__register-img">
      <img src={images.cell} alt='person in cell'/>
		</div>
		<div className="app__register-register-content">
			<form className="app__register-form" action="" >
      <img src={images.person} alt='person'/>                                   
				<h2 class="title">Register</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5> </h5>
           		   		<input type="username" class="input" name='username' placeholder='Username'
                    onChange={handleChange}
                    />
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5> </h5>
           		    	<input type="password" class="input" name='password' placeholder='Password'
                    onChange={handleChange}
                    />
            	   </div>
            	</div>
            	<a className="app__register-a" href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Register" onClick={handleSubmit}/>
              <p></p>
              <a className="app__register-a" href="/Login">Already Registered? Login into your account here</a>
            </form>
        </div>
    </div>
    <script type="text/javascript" src="js/main.js"></script>
  </div>
</div>
  )
}

export default Register
