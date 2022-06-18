import React, {useState} from 'react'
import "./Auth.scss"
import Logo from '../../img/cameraLogo.png'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser, registerUser } from '../../actions/authActions';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
  const loading = useSelector((state)=> state.authReducer.loading)
  const [isSignUp, setisSignUp] = useState(true);    //if false, render login page, isSignUp means (want to sign up)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[data,setData] = useState({
    firstname:"",
    lastname:"",
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
      data.password === data.confirmPassword? dispatch(registerUser(data, navigate)): setConfirmPassword(false);
    } 
    else{
      dispatch(loginUser(data, navigate));      //dispatch dispatches an loginUser function from authActions folder
    }
  }

  const resetForm = () => {
    setConfirmPassword(true);
    setData({
    firstname:"",
    lastname:"",
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
          <input className='signUpInput' name='firstname' type="text" placeholder='First Name' onChange={handleChange} value={data.firstname}/>
          <input className='signUpInput' name='lastname' type="text" placeholder='Last Name' onChange={handleChange} value={data.lastname}/>
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
        <button className="signUpButton" type='submit' disabled={loading}>{loading?"Loading...": isSignUp? "Sign Up": "Log In"}</button>
      </form>
      </div>
    </div>
  )
};


export default Auth