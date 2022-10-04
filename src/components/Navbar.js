import React, { useContext } from 'react';
import  UserContext  from './UserContext'
import {useNavigate} from "react-router-dom";

function Navbar(){
    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <>
            <h1>Hello, {user.name}!</h1>
            <button onClick={event => {
                logout();
                localStorage.clear()
                navigate('/');
            }}>Logout</button>
        </>
    )
}

export default Navbar
