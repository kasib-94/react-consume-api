import React, {useContext, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login";
import App from "../App";
import AuthApp from "./AuthApp";

function UnauthApp() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            < Login/>
                        </>

                    }/>
                    <Route path="/home" element={
                        <>
                            < Login/>
                        </>

                    }/>
                </Routes>
            </Router>

        </>
    );
}

export default UnauthApp;