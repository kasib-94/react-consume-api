import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

function AuthApp() {


    return (
        <>

            <Router>
                <Routes>
                    <Route path="/home" element={
                        <>
                        < Navbar />
                        < Home />
                        </>

                    }/>
                </Routes>
            </Router>
        </>
    );
}

export default AuthApp;