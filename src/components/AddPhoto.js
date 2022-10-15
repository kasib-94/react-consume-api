import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";

function Account(effect, deps) {


    const navigate = useNavigate();

    const [albums, setAbums] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/photos', {
            method: 'POST',
            body: JSON.stringify({
                albumId: `${document.getElementById('album-select').value}`,
                title: `${document.getElementById('photo-title').value}`,
                url: `${document.getElementById('photo-url').value}`,
                thumbnailUrl: `${document.getElementById('photo-thumbnailUrl').value}`,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        window.location.reload()
    }

    useEffect(() => {

        console.log(user)

        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then(response => response.json())
            .then(json => setAbums(json))
        console.log(albums)

    }, [])

    function handleChange(e) {
        console.log(document.getElementById('album-select').value)

    }

    if (albums !== undefined) {
        return (

            <>

                <form onSubmit={handleSubmit}>

                    <div className="w-80 mx-auto mt-2">
                        <label htmlFor="small-input"
                               className=" text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" id="photo-title"

                               className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-80 mx-auto mt-2">
                        <label htmlFor="small-input"
                               className=" text-sm font-medium text-gray-900 dark:text-gray-300">url</label>
                        <input type="text" id="photo-url"

                               className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-80 mx-auto mt-2">
                        <label htmlFor="small-input"
                               className=" text-sm font-medium text-gray-900 dark:text-gray-300">thumbnailUrl</label>
                        <input type="text" id="photo-thumbnailUrl"
                               defaultValue={""}
                               className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-80 mx-auto mt-2">
                        <label htmlFor="small-input"
                               className=" text-sm font-medium text-gray-900 dark:text-gray-300">Select Album</label>
                        <select
                            onChange={handleChange}
                            name="fruits"
                            id="album-select"
                            className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {albums.map((option, index) => (
                                <option key={index} value={option.id}>
                                    {option.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mx-auto w-20 pt-4">
                        <button type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                        >Submit
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default Account
