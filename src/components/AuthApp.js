import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Account from "./Account"

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
                    <Route path="/account" element={
                        <>
                            < Navbar/>
                            < Account/>
                        </>

                    }/>
                </Routes>

            </Router>
        </>
    );
}

export default AuthApp;