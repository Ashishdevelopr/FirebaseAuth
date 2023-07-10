import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth} from '../config/firebase'
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth"

const SignUp = () => {
  const [value, setValue] = useState({
    name:"",
    email:"",
    password:""
  })

  const [errorMsg, setErrorMsg] = useState('')

  const [disabledButton, setDisabledButton] = useState(false)

  const navigate = useNavigate()

  const handleValues =() =>{
    if(!value.name || !value.email || !value.password){
      setErrorMsg("Please fill all the fields")
      return
    }
    setErrorMsg("")
    setDisabledButton(true)

     createUserWithEmailAndPassword(auth, value.email, value.password)
     .then(async(res)=>{
       setDisabledButton(false)
       const user = res.user
       updateProfile(user,{displayName:value.name})
       navigate("/")
     })
    .catch((error)=>{
      setErrorMsg(error.message)
      setDisabledButton(false)
    })
  }

  const handleChange = (e) =>{
    setValue({...value, [e.target.name]:e.target.value})
  }

  return (
    <div className='outer-auth'>
            <div className='inner-style'>
                <p className='page-title'>SignUp</p>
                <label className='label'>Name: </label>
                <input className='name' name="name" onChange={handleChange}type='text' placeholder='Enter your name'></input>
                <label className='label'>Email: </label>
                <input className='email' name="email" onChange={handleChange}type='email' placeholder='Enter your email'></input>
                <label className='label'>Password: </label>
                <input className='pass' name="password" onChange={handleChange}type='password' placeholder='Enter password'></input>
                <h6 className='error-msg'>{errorMsg}</h6>
                <button type='submit' className='auth-button' onClick={handleValues} disabled={disabledButton}>Signup</button>
                <h5 className='auth-footer'>Already have account <Link to="/login">login</Link></h5>
            </div>
        </div>
  )
}

export default SignUp