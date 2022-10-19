import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


export const Card = ({

                         thumbnailUrl,
                         url,
                         title,
                         id,
                         albumId
                     }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [albums, setAlbums] = useState([])
    useEffect(() => {

        const fetchData = () => fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then(response => response.json())
            .then(json => setAlbums(json.map(x => x.id)))

        fetchData()

    }, [])

    function deleteCard() {
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
            method: 'DELETE',
        });
        window.location.reload()
    }


    return (
        <div

            className="inline-block  w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center">
            <a>
                <img className="rounded-t-lg" src={thumbnailUrl} alt=""/>
            </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
                <a href={url}

                   className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See Photo

                </a>
                {albums.includes(albumId) ?
                    <button
                        onClick={deleteCard}
                        className=" mx-4 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-5 border border-red-500 w-30"
                    >
                        Delete !
                    </button>
                    :
                    ""
                }

            </div>
        </div>
    )
}

export default Card
