import React from 'react'
import "./Auth.scss"
import Logo from '../../img/cameraLogo.png'
const Auth = () => {
  return (
    <div className="auth">
        <div className="authLeft">
            <img src={Logo} alt=""/>
            <div className="webName">
                <h1>AY Explore</h1>
                <h6>Explore the world and connect with everyone!</h6>
            </div>
        </div>

        <h1>Form</h1>
    </div>
  )
}

export default Auth