
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#0e1863";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
  <>
      {/* <Navbar title="textUtils" aboutText="about me"/> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <div className='container my-3'>
      {/* <About/> */}
      <TextForm heading="Enter the text to be analysed" mode={mode}/>
      </div>
  </>
  );
}

export default App;
