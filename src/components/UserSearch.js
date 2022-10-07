import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function UserSearch() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(username)
        let arr = []
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                arr = data
            } catch (err) {

                console.log(err)
            }
        }
        await fetchData()
        console.log(arr)
        const result = arr.find(item => item.username.toLowerCase() === username)
        console.log(result)
        if (result === undefined) {
            document.getElementById("error").className = "pt-4";
        } else {
            navigate(`../users/${result.id}`);
        }

    }
    const handleChange = (e) => {
        document.getElementById("error").className = "hidden";
        setUsername(e.target.value.toLowerCase());
    }

    return (
        <form onSubmit={handleSubmit} className="row-auto mb-10">
            <h1 className="inline-flex pr-8">Find User:</h1>
            <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username" type="text" placeholder="Username"/>
            <button type="submit"
                    className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
            >Submit
            </button>
            <div className="hidden" id="error">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                     role="alert">
                    <strong className="font-bold">Holy smokes ! </strong>
                    <span className="block sm:inline "

                    >Cannot find user with username: {username} , example user : bret</span>

                </div>
            </div>
        </form>
    )

}

export default UserSearch
