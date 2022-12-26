import React, {ChangeEvent, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Card, {CardProps} from "./Card";
import {AlbumInterface, UserInterface} from "../shared/type.interfaces";

function UserSearch() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [card, setCard] = useState<CardProps>()
    const [album, setAlbum] = useState<AlbumInterface>()
    const [id, setId] = useState('')
    const handleSubmit =  (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(username)
        let arr: UserInterface[]= []
        const fetchData =  () => {
                 fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json=>(arr=json))
        }
         fetchData()
        const result = arr.find(item => item.username.toLowerCase() === username)
        console.log(result)
        if (result === undefined) {
            (document.getElementById("error")as HTMLInputElement ).className = "pt-4";
        } else {
            navigate(`../users/${result.id}`);
        }

    }

    useEffect(() => {
        if (album !== undefined && Object.keys(album).length !== 0) {
            navigate(`/cardlist/${album.id}`)
        } else if (album !== null) {
   //         (document.getElementById("errorAlbum")as HTMLInputElement).className = "py-5 px-5";
        }

        const fetchData = () =>  fetch(`https://jsonplaceholder.typicode.com/photos/${parseInt((document.getElementById("photoId")as HTMLInputElement).value)}`)
            .then(response => response.json())
            .then(json => setCard(json))

        fetchData()

    }, [album]); //

    function showSinglePhoto() {
        (document.getElementById("serach-photo")as HTMLInputElement).className = "py-5 px-5";
    }


    const handleSubmitPhoto = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if ((typeof (parseInt((document.getElementById("photoId")as HTMLInputElement).value)) === "number") && parseInt((document.getElementById("photoId")as HTMLInputElement).value) < 5000 && parseInt((document.getElementById("photoId")as HTMLInputElement).value) >= 1) {

            fetch(`https://jsonplaceholder.typicode.com/photos/${parseInt((document.getElementById("photoId")as HTMLInputElement).value)}`)
                .then(response => response.json())
                .then(json => setCard(json))

            showSinglePhoto();

        } else {
            (document.getElementById("serach-photo")as HTMLInputElement).className = "hidden";
        }

    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        (document.getElementById("error")as HTMLInputElement).className = "hidden";
        setUsername(e.currentTarget.value.toLowerCase());
    }
    const handleAlbumId = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`https://jsonplaceholder.typicode.com/albums/${parseInt((document.getElementById("albumId")as HTMLInputElement).value)}`)
            .then(response => response.json())
            .then(json => setAlbum(json))


    }
console.log(card)
    if (card!==undefined)
{
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

}else return <>


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



    </>}

export default UserSearch
