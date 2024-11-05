import { useState } from 'react';
import './App.css';
import 'react-router-dom'
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,  
//   Routes
// } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light')

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('black')
      document.body.style.backgroundColor="#000421";
      showAlert("Dark Mode Has Been Enabled","success")
      document.title='TextUtils ~ Dark Mode'
    }else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Has Been Enabled","success")
      document.title='TextUtils ~ Light Mode'
    }
  }

const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      type:type,
      msg:message
    })
  }

  setTimeout(() => {
    setAlert(null)
  }, 1500);

  return (
    <>
      {/* <Router> */}
        <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode}/>} /> */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode}/>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
