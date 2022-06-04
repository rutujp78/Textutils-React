
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light"); // for dark or light mode
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
      
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark Mode has been enabled.","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode had been enabled.","success");
    }
  }

  return (

  <>
    <Router>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character counter, Remove extra spaces, Change font to cursive" mode={mode}></TextForm>} />
        </Routes>
      </div>
    </Router>
  </>

  );
  
}

export default App;
