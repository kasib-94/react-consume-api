
import React, {useContext} from 'react'
import './App.css';
import Login from "./components/Login";
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
    Routes,
  Link
} from "react-router-dom";
import UserContext from "./components/UserContext";
import AuthApp from "./components/AuthApp";
import UnauthApp from "./components/UnauthApp";




function App() {

  const {user} = useContext(UserContext)


  return (
      user.auth ? <AuthApp /> : <UnauthApp />
    // <>
    // <Router>
    //   <Routes>
    //
    //
    //     <Route path="/" element={
    //       <>
    //       <Login  />
    //       </>
    //     } />
    //
    //     <Route path="/home" element={
    //       <>
    //
    //         < Navbar />
    //         < Home />
    //       </>
    //     } />
    //
    //
    //   </Routes>
    // </Router>
    // </>

  );
}

export default App;
