import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./Login";

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