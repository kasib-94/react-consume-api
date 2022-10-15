import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import Post from "./Post";
import Album from "./Album";
import CardList from "./CardList";


function Account() {


    const navigate = useNavigate();
    const [albums, setAlbums] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const handleSubmit = (e) => {
        e.preventDefault()
        user.name = document.getElementById("form-name").value
        user.username = document.getElementById("form-username").value
        user.address.street = document.getElementById("form-street").value
        user.address.suite = document.getElementById("form-suite").value
        user.address.city = document.getElementById("form-city").value
        user.address.zipcode = document.getElementById("form-zipcode").value

        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: 'Put',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

        navigate("/home")

    }

    useEffect(() => {


        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(response => response.json())
            .then(json => setPosts(json))


        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
            .then(response => response.json())
            .then(json => setAlbums(json.map(x => x.id)))


    }, [])

    function handleClick() {
        console.log(albums)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                    <input type="text" id="form-name"
                           defaultValue={user.name}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                    <input type="text" id="form-username"
                           defaultValue={user.username}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">Street</label>
                    <input type="text" id="form-street"
                           defaultValue={user.address.street}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>

                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">Suite</label>
                    <input type="text" id="form-suite"
                           defaultValue={user.address.suite}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">City</label>
                    <input type="text" id="form-city"
                           defaultValue={user.address.city}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="w-80 mx-auto mt-2">
                    <label htmlFor="small-input"
                           className=" text-sm font-medium text-gray-900 dark:text-gray-300">Zipcode</label>
                    <input type="text" id="form-zipcode"
                           defaultValue={user.address.zipcode}
                           className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mx-auto w-20 pt-4">
                    <button type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                    >Submit
                    </button>
                </div>
            </form>
  
            <div className="flex-row flex-wrap justify-between overflow-y-auto">


                {posts.map((item) => {
                    return <Post
                        key={item.id}
                        id={item.id}
                        userId={item.userId}
                        title={item.title}
                        body={item.body}
                        comments={true}
                    />
                })}

            </div>
            <div className="flex-row flex-wrap justify-between overflow-y-auto">
                {albums.map((item) => {
                    return <CardList
                        albumId={item}
                    />
                })}
            </div>
        </>
    )
}

export default Account
