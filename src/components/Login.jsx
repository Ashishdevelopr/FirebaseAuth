import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [value, setValue] = useState({
        name: "",
        password: ""
    })

    const [disabledButton, setDisabledButton] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")

    const navigate = useNavigate()

    const handleSubmit = () => {
        if (!value.email || !value.password) {
            setErrorMsg("Please Fill all the feilds")
            return
        }
        setErrorMsg("")
        setDisabledButton(true)

        signInWithEmailAndPassword(auth, value.email, value.password)
            .then(async (res) => {
                setDisabledButton(false)
                navigate("/")
            })
            .catch((error) => {
                setErrorMsg(error.message)
                setDisabledButton(false)
            })
    }


    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='outer-auth'>
            <div className='inner-style'>
                <p className='page-title'>Login</p>
                <label className='label'>Email: </label>
                <input className='email' name='email' onChange={handleChange} type='email' placeholder='Enter your email'></input>
                <label className='label'>Password: </label>
                <input className='pass' name='password' onChange={handleChange} type='password' placeholder='Enter password'></input>
                <h6 className='error-msg'>{errorMsg}</h6>
                <button type='submit' className='auth-button' onClick={handleSubmit} disabled={disabledButton}>Login</button>
                <h5 className='auth-footer'>Don't have account <Link to="/signup">signup</Link></h5>
            </div>
        </div>
    )
}

export default Login