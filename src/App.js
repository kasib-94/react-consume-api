import React, {useContext, useState} from 'react'
import './App.css';


import AuthApp from "./components/AuthApp";
import UnauthApp from "./components/UnauthApp";


function App() {


    return (
        JSON.parse(localStorage.getItem('user')) !== null ? <AuthApp/> : <UnauthApp/>


    );
}

export default App;
