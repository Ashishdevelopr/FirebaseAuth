import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    return (
        <div className='outer-auth'>
            <div className='inner-style'>
                <p className='page-title'>Login</p>
                <label className='label'>Email: </label>
                <input className='email' type='email' placeholder='Enter your email'></input>
                <label className='label'>Password: </label>
                <input className='pass' type='password' placeholder='Enter password'></input>
                <button type='submit' className='auth-button'>Login</button>
                <h5 className='auth-footer'>Don't have account <Link to="/signup">signup</Link></h5>
            </div>
        </div>
    )
}

export default Login