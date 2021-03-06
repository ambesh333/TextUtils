
import './Appa.css';
import About from './components/About';
import Navbar from './components/Navbar';


import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);



 const showAlert =(message,type)=>
 {
   setAlert ({
     msg: message,
     type: type
   })
   setTimeout(() => {
     setAlert(null)
   }, 1500);
 }
  const toggleMode = ()=>{
    if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor = "grey";
  showAlert("Dark mode has been enable","success");
  document.title = "TextUtils - Darkmode ";
}
  else {
    setMode( 'light');
    document.body.style.backgroundColor = "white";
   showAlert("light mode has been enable","success");
  document.title = "TextUtils - lightmode ";
  setInterval(() => {
    
    document.title ="TextUtils is Amazing Mode";
  }, 200);

  setInterval(() => {
    
    document.title ="Install TextUtils now";
  }, 1500);

}
  }
  
  return (
    <>
    <Router>
    <Navbar title = "TextUtils"mode = {mode} toggleMode={toggleMode}/> 
    <Alert alert = {alert}/>
    <div className ="container">
    <Switch> */
           <Route exact path="/about">
            <About/>
          </Route> */
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading ="Enter the text to analyse below" mode = {mode}/>
          </Route>
        {} </Switch>

    </div>
    </Router>
    </>
);
}

export default App;
