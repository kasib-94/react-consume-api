import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {useParams} from "react-router-dom";
import Album from "./Album";


function AlbumList() {

    const [albums, setAlbums] = useState([])
    const {id} = useParams()

    useEffect(() => {


        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(json => setAlbums(json))

        }

        fetchData()
        console.log(albums)

    }, [])


    return (
        <>

            <div className="flex-row flex-wrap justify-between overflow-y-auto">

                {console.log(albums)}
                {albums.map((item) => {
                    return <Album
                        id={item.id}
                        userId={item.userId}
                        title={item.title}
                    />
                })}

            </div>

        </>
    )
}

export default AlbumList
