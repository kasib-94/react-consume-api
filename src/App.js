
import React from 'react'
import './App.css';
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
    Routes,
  Link
} from "react-router-dom";


function App() {




  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Login  />
          </>
        } />
        <Route path="/home" element={
          <>
            <h1>home </h1>
          </>
        } />


      </Routes>
    </Router>
    </>
  );
}

export default App;
