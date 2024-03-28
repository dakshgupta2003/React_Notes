import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // tells wether dark mode is enabled or not
  
  
  const[alert,setAlert] = useState(null);
  // alert,setAlert is an object

  const showAlert = (message,type)=>{
    setAlert({
      msg:message, 
      type:type // type of alert represents success, warning,danger (diffenrect colors)
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
  }
  // cls meaning we are passing a class
  // cls will be NULL when we go from light to dark and dark to light theme
  const toggleMode = (cls)=>{
    removeBodyClasses()
    // console.log(cls);
    document.body.classList.add('bg-'+cls)
    // say wi click on danger so bg-danger will add to body but when we toggle on bg-waarnign then still the color remains red 
    // because the warnign class has been added to classlist but at the top of list it is still the danger class --> to fix this we remove all classes from body
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#060532' // we are giving the whole body as dark color on toggle
      showAlert("Dark Mode Enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success")
    }
  }

  
  return (
    
    // <>
    <Router>
      <Navbar title="TextUtils" about_text="about us" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert} />
      {/* container is a class in BOOTSTRAP that gives the element inside it some css properties */}
      {/* my-3 is a property in bootstrap that give margin y of 3px */}
      <div className="container my-3">
      <Routes>
        <Route path="/About" element={<About mode={mode} />} />
        
        <Route path="/" element={<Textform showAlert={showAlert} heading ="Enter the Text to Analyze" mode={mode}/>} />
          
      </Routes>
      </div>
    </Router>
    // </>
    
  );
}

export default App;