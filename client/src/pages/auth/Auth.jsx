import React from 'react'
import "./Auth.scss"
import Logo from '../../img/cameraLogo.png'
const Auth = () => {
  return (
    <div className="auth">
        <div className="authLeft">
            <div className="webName">
                <h1>AY Explore</h1>
                <img src={Logo} alt=""/>
                <h6>Explore the world and connect with everyone!</h6>
            </div>
        </div>

        {login()}
    </div>
  )
};

function signUp(){
  return(
    <div className="authRight">
      <form className="signUpForm">
        <h3>Sign Up</h3>
        <div>
          <input className='signUpInput' name='firstName' type="text" placeholder='First Name' />
          <input className='signUpInput' name='lastName' type="text" placeholder='Last Name' />
        </div>

        <div>
        <input className='signUpInput' name='username' type="text" placeholder='Username' />
        </div>

        <div>
        <input className='signUpInput' name='password' type="text" placeholder='Password' />
        <input className='signUpInput' name='confirmPassword' type="text" placeholder='Confirm Password' />
        
        </div>

        <div>
          <span>Already have an account? Log In</span>
        </div>
        <button className="signUpButton" type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

function login(){
  return(
    <div className="authRight">
      <form className="signUpForm">
        <h3>Log In</h3>

        <div>
        <input className='signUpInput' name='username' type="text" placeholder='Username' />
        </div>

        <div>
        <input className='signUpInput' name='password' type="text" placeholder='Password' />
        </div>
        <div>
          <span>Don't have an account? Sign Up</span>
        </div>
        <button className="signUpButton" type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Auth