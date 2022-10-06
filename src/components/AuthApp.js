import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Account from "./Account"
import UserSearch from "./UserSearch"
import User from "./User"


function AuthApp() {
    return (
        <>

            <Router>
                <Routes>
                    <Route path="/home" element={
                        <>

                            < Navbar/>
                            <UserSearch/>
                            < Home/>
                        </>

                    }/>
                    <Route path="/" element={
                        <>

                            < Navbar/>
                            <UserSearch/>
                            < Home/>
                        </>

                    }/>
                    <Route path="/account" element={
                        <>
                            < Navbar/>
                            < Account/>
                        </>

                    }/>
                    <Route path="/user/:id" element={
                        <>

                            < Navbar/>
                            <User/>
                        </>

                    }/>
                </Routes>

            </Router>
        </>
    );
}

export default AuthApp;