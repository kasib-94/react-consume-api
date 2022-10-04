import React, {useContext} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import App from "../App";

function AuthApp() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path="/home" element={
                        <>
                            < Navbar/>
                            < Home/>
                        </>

                    }/>
                    <Route path="/" element={
                        <>
                            < Navbar/>
                            < Home/>
                        </>

                    }/>
                </Routes>

            </Router>
        </>
    );
}

export default AuthApp;