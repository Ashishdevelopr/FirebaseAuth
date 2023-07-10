import React, { useState } from 'react'
import {auth} from "../config/firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'


//  Just for practice 


const Auth = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const singIn = async()=>{
        await createUserWithEmailAndPassword(auth, email, password)
    }

    // const singInGoogle = async()=>{
    //   try{
    //     await signInWithPopup(auth, googleProvider)
    //   } catch(error){
    //     alert(error.message)
    //   }
    // }

  return (
    <div>
        <input type="email" placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Enter your password' onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit' onClick={singIn}>SignIn</button>
    </div>
  )
}

export default Auth