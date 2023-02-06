
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBgColour = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-secondary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-info");
  }

  const toggleMode = (cls) => {
    removeBgColour();
    document.body.classList.add("bg-" + cls);
    setMode("dark");
    showAlert("You've changed the theme", "success");
  }

  return (
  <><Router>

      {/* <Navbar title="textUtils" aboutText="about me"/> */}
      <Navbar title="textUtils" mode={mode} toggleMode={toggleMode} aboutText="About"/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      {/* <About/> */}
      <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to be analysed" mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
