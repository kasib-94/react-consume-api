import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Card from "./Card";

function UserSearch() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [card, setCard] = useState('')
    const [album, setAlbum] = useState(0)
    const [id, setId] = useState('')
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

    useEffect(() => {
        console.log(album)
        console.log(typeof (album))

        if (album !== 0 && Object.keys(album).length !== 0) {
            navigate(`/cardlist/${album.id}`)
        } else if (album !== 0) {
            document.getElementById("errorAlbum").className = "py-5 px-5";
        }
    }, [album]); //

    function showSinglePhoto() {

        document.getElementById("serach-photo").className = "py-5 px-5";
    }


    const handleSubmitPhoto = async (e) => {
        e.preventDefault()
        if ((typeof (parseInt(document.getElementById("photoId").value)) === "number") && parseInt(document.getElementById("photoId").value) < 5000 && parseInt(document.getElementById("photoId").value) >= 1) {

            fetch(`https://jsonplaceholder.typicode.com/photos/${parseInt(document.getElementById("photoId").value)}`)
                .then(response => response.json())
                .then(json => setCard(json))

            showSinglePhoto();

        } else {
            document.getElementById("serach-photo").className = "hidden";
            console.log(typeof (document.getElementById("errorPhoto").className = "py-5 px-5"))
        }

    }
    const handleChange = (e) => {
        document.getElementById("error").className = "hidden";
        setUsername(e.target.value.toLowerCase());
    }
    const handleAlbumId = (e) => {
        e.preventDefault()
        console.log(parseInt(document.getElementById("albumId").value))
        fetch(`https://jsonplaceholder.typicode.com/albums/${parseInt(document.getElementById("albumId").value)}`)
            .then(response => response.json())
            .then(json => setAlbum(json))


    }


    return (
        <>


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
            <form onSubmit={handleSubmitPhoto} className="row-auto mb-10">
                <h1 className="inline-flex pr-8">Find Photo:</h1>
                <input
                    className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="photoId" type="text" placeholder="Photo Id"

                />
                <button type="submit"
                        className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                >Submit
                </button>
                <div className="hidden" id="errorPhoto">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                         role="alert">
                        <strong className="font-bold">Holy smokes ! </strong>
                        <span className="block sm:inline "

                        >Cannot find photo with id: {id} , example id : 5</span>

                    </div>
                </div>
            </form>

            <form onSubmit={handleAlbumId} className="row-auto mb-10">
                <h1 className="inline-flex pr-8">Find Album:</h1>
                <input
                    className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="albumId" type="text" placeholder="Type Album Id !"/>
                <button type="submit"
                        className="mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                >Submit
                </button>
                <div className="hidden" id="errorAlbum">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                         role="alert">
                        <strong className="font-bold">Holy smokes ! </strong>
                        <span className="block sm:inline "

                        >Cannot find album ! , example id : 1-100</span>

                    </div>
                </div>
            </form>

            <div className="hidden" id="serach-photo">

                <h1> Photo with id : {card.id}</h1>

                {
                    <Card
                        containerSelector
                        key={card.id}
                        thumbnailUrl={card.thumbnailUrl}
                        url={card.url}
                        title={card.title}
                        albumId={card.albumId}
                        id={card.id}
                    />
                }

            </div>

        </>
    )

}

export default UserSearch
