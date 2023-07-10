import {Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'

function App() {

  return (
    <>
    <h3 className='auth-title'>Login & SignUp Auth</h3>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
    <footer className='footer'><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by  <span className='footer-span'><i className="fa-brands fa-github"></i></span> Ashish Developer</a></footer>
    </>
  )
}

export default App
