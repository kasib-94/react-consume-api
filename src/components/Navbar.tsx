import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserInterface} from "../shared/type.interfaces";
import User from "./User";

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserInterface>(JSON.parse(localStorage.getItem('user' )|| "" ))
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div
                    className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="/home" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9"
                             alt="YouSocial Logo"/>
                        <span
                            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">YouSocial</span>
                    </a>
                    <div className="flex items-center">
                        <a href="/albums"
                           className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">See
                            Albums !</a>
                        <a href="/home"
                           className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">See Photos
                            !</a>
                        <a href="/post"
                           className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">See Posts
                            
                            !</a>
                        <a href="/account"
                           className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">{user.email}</a>
                        <a href="#"
                           className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                           onClick={event => {
                               localStorage.clear()
                               navigate('/');
                               window.location.reload()
                           }}
                        >Logout</a>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
