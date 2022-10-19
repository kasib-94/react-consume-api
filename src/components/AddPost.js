import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";

function AddPost(effect, deps) {


    const navigate = useNavigate();

    const [albums, setAlbums] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                userId: user.id,
                title: `${document.getElementById('postTitle').value}`,
                body: `${document.getElementById('postBody').value}`,
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


        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then(response => response.json())
            .then(json => setAlbums(json))
        console.log(albums)

    }, [])


    if (albums !== undefined) {
        return (

            <>

                <form onSubmit={handleSubmit}>

                    <div className="w-1/3 mx-auto mt-2">
                        <label htmlFor="small-input"
                               className=" text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                        <input type="text" id="postTitle"

                               className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-1/3  mx-auto mt-2">
                        <label htmlFor="large-input"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            Text
                        </label>
                        <textarea rows={5} type="text" id="postBody"
                                  className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>

                    <div className="mx-auto w-40 pt-4">
                        <button type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                        >Add Post !
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

export default AddPost
