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
import PostList from "./PostList";
import Album from "./Album";
import AlbumList from "./AlbumList";
import CardList from "./CardList";
import Card from "./Card";


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
                    <Route path="/users/:id" element={
                        <>

                            < Navbar/>
                            <User/>
                            < PostList/>
                        </>

                    }/>

                    <Route path="/albums" element={
                        <>

                            < Navbar/>
                            <AlbumList/>
                        </>

                    }/>
                    <Route path="/album/:id" element={
                        <>

                            < Navbar/>
                            <Album/>
                        </>

                    }/>
                    <Route path="/cardlist/:id" element={
                        <>

                            < Navbar/>
                            <CardList/>
                        </>

                    }/>
                    <Route path="/card/:id" element={
                        <>

                            < Navbar/>
                            <Card/>
                        </>

                    }/>
                </Routes>

            </Router>
        </>
    );
}

export default AuthApp;