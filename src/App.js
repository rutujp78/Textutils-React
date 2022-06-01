//import logo from './logo.svg';
import About from './components/About';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//let name="DarkRaider";

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

    // const alertStyle=(){
      
    // }

  }

  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-primary');
  // }

  const toggleMode=()=>{
  // const toggleMode=(cls)=>{
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor="black";
      document.body.style.color="white";
      showAlert("Dark Mode has been enabled.","success");
      // document.getElementsByClassName('accordion-button').style="filter: invert(0)";
      // document.title='TextUtils - Dark Mode'
      // setInterval(() => {
      //   document.title='TextUtils is Amazing Mode'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils Now';
      // }, 1500);
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
      showAlert("Light Mode had been enabled.","success");
      // document.getElementsByClassName('accordion-button').style="filter: invert(1)";
      // document.title='TextUtils - Light Mode'
    }
  }

  return (
  /* // to use javasscript use '{}'. */
  <>
    <Router>
      {/* <Navbar /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      {/* <Alert alert={alert} style={alertStyle}></Alert> */}
      {/* <Alert alert="This is Alert and it is dissmissable."></Alert> */}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <div className="container my-3">

        {/* <Switch> */}
        <Routes>
          {/* <Route path="/about"> */}
          {/* /users --> Component 1
          /users/home --> --> Component 2 React uses partial matching so use exact*/}
          <Route exact path="/about" element={<About mode={mode} />} />
            {/*  <About mode={mode} />
           </Route> for v5 of react-router-dom*/}
          {/* <Route path="/"> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}></TextForm>} /> */}
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character counter, Remove extra spaces, Change font to cursive" mode={mode}></TextForm>} />
{/* 
            <TextForm showAlert={showAlert} heading="Enter text below to analyze" mode={mode}></TextForm>

          </Route> */}
        </Routes>
        {/* </Switch> */}
        {/* <About/> */}


      </div>
    </Router>
  </>

  );
  
}

export default App;
// export {mode};
