import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from "react-router-dom"
import { data, images } from '../../constants';

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

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const [err, setError] = useState(null);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || null));

  const login = async (inputs) => {
    const res = await Axios.post("/api/auth/signin", inputs);
    setCurrentUser(null);
    // Extract user data from response
    const { data } = res;
    console.log('User Data:', data); // Debug logging
    const user = {
      id: data.id,
      username: data.username,
      email: data.email,
      roles: data.roles,
      accessToken: data.accessToken
    };

    // Store user in local storage
    // const user = res;
    localStorage.setItem('user', JSON.stringify(user));
    // localStorage.setItem('user', data);
    // localStorage.setItem('user', JSON.stringify(user.data));
  }

  const [loginStatus, setLoginStatus] = useState("");
  // Invalid Login Error
  const [invalidLogin, setInvalidLogin] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs)
      navigate("/Admin");
    } catch (err) {
      // Alert bad user/pass
      setInvalidLogin('Invalid User Name or Password');
      // Fix error
      // setError(err.response.data);
    }
  };

 
  return (
<div className='app__login'>
  <div className='app__login-body'>
	  <img className="app__login-wave" src="http://github.com/sefyudem/Responsive-Login-Form/blob/master/img/wave.png?raw=true"/>
	<div className="app__login-container">
		<div className="app__login-img">
			<img src={images.cell} alt='person in cell'/>
		</div>
		<div className="app__login-login-content">
			<form className="app__login-form" action="" >
        <p className='invalid_log'>{invalidLogin}</p>
				<img src={images.person} alt='person'/>                                   
				<h2 class="title">Login</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5></h5>
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
           		    	<h5></h5>
           		    	<input type="password" class="input" name='password' placeholder='Password'
                    onChange={handleChange}
                    />
            	   </div>
            	</div>
            	<a className="app__login-a" href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login" onClick={handleSubmit}/>
              {err && <p> {err}</p>}
              <a className="app__login-a" href="/Register">Create Account</a>
              <h1>{loginStatus}</h1>
            </form>
        </div>
    </div>
    <script type="text/javascript" src="js/main.js"></script>
  </div>
</div>
  )
}

export default Login
