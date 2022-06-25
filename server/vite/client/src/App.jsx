import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Form } from "./components/form"
import { LoginForm } from './components/login'
import {Dashboard } from './components/dashboard'

import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Dashboard/>} />
        <Route path='/register' element={<Form/>} />
        <Route path='/login' element= {<LoginForm/>} />
      </Routes>

 
    </div>
  )
}

export default App
