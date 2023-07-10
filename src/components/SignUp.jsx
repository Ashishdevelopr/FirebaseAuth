import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [value, setValue] = useState({
    name:"",
    email:"",
    password:""
  })

  const handleValues = () =>{
    console.log(value)
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
                <button type='submit' className='auth-button' onClick={handleValues}>Signup</button>
                <h5 className='auth-footer'>Already have account <Link to="/login">login</Link></h5>
            </div>
        </div>
  )
}

export default SignUp