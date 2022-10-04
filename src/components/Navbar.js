import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <>


        </>
    )
}

export default Navbar
