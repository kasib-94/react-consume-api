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
import Post from "./Post";
import PostView from "./PostView";
import AddPhoto from "./AddPhoto";
import AddPost from "./AddPost";


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
                            <UserSearch/>
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
                    <Route path="/card/:idd" element={
                        <>

                            < Navbar/>
                            <Card/>
                        </>

                    }/>
                    <Route path="/post/:id" element={
                        <>

                            < Navbar/>
                            <PostView/>
                        </>

                    }/>
                    <Route path="/post" element={
                        <>

                            < Navbar/>
                            <UserSearch/>
                            <PostList/>
                        </>

                    }/>
                    <Route path="/addphoto" element={
                        <>

                            < Navbar/>
                            <AddPhoto/>
                        </>

                    }/>
                    <Route path="/newpost" element={
                        <>

                            < Navbar/>
                            <AddPost/>
                        </>

                    }/>

                </Routes>

            </Router>
        </>
    );
}

export default AuthApp;