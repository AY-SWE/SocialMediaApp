import React, {useState} from 'react'
import "./Auth.scss"
import Logo from '../../img/cameraLogo.png'
const Auth = () => {
  const [isSignUp, setisSignUp] = useState(true);    //if false, render login page, isSignUp means (want to sign up)
  const[data,setData] = useState({
    firstName:"",
    lastName:"",
    username:"",
    password:"",
    confirmPassword: ""
  });

  const[confirmPassword, setConfirmPassword] = useState(true);

  const handleChange = (e) => {
    setData({...data, [e.target.name]:  e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp){
      if(data.password !== data.confirmPassword)
        setConfirmPassword(false)
    }
  }

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
    firstName:"",
    lastName:"",
    username:"",
    password:"",
    confirmPassword: ""
  })
  }
 
  return (
    <div className="auth">
        <div className="authLeft">
            <div className="webName">
                <h1>AY Explore</h1>
                <img src={Logo} alt=""/>
                <h6>Explore the world and connect with everyone!</h6>
            </div>
        </div>

        <div className="authRight">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h3>{isSignUp?"Sign Up": "Log In"}</h3>
        
          {isSignUp &&    //only signup page needs firstName, lastName
          <div>
          <input className='signUpInput' name='firstName' type="text" placeholder='First Name' onChange={handleChange} value={data.firstName}/>
          <input className='signUpInput' name='lastName' type="text" placeholder='Last Name' onChange={handleChange} value={data.lastName}/>
          </div>}
          

        <div>
        <input className='signUpInput' name='username' type="text" placeholder='Username' onChange={handleChange} value={data.username}/>
        </div>
          {/* value parameter will reset the inputs to blank */}
        <div>
        <input className='signUpInput' name='password' type="password" placeholder='Password' onChange={handleChange} value={data.password}/> 
        
        {isSignUp &&  
         <input className='signUpInput' name='confirmPassword' type="password" placeholder='Confirm Password' onChange={handleChange} value={data.confirmPassword}/>
        }
       
        </div>

        <span style={{fontSize:"12px", color:"red", display: confirmPassword?"none":"block"}}>
          * Password and Confirm password does not match
        </span>
        <div>
          <span style={{cursor: "pointer"}} onClick={()=>{setisSignUp((prev)=>!prev); resetForm()}}>{isSignUp? "Already have an account? Log In": "Don't have an account? Sign Up"}</span>
        </div>
        <button className="signUpButton" type='submit'>{isSignUp? "Sign Up": "Log In"}</button>
      </form>
      </div>
    </div>
  )
};


export default Auth