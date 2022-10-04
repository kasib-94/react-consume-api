import React, { useContext, useState } from 'react';
import  UserContext  from './UserContext';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";

function UnauthApp() {
    const { login } = useContext(UserContext);
    const [name, setName] = useState();

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            < Login />
                        </>

                    }/>
                </Routes>
            </Router>

        </>
    );
}

export default UnauthApp;