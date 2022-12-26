import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {Params, useParams} from "react-router-dom";
import Album, {AlbumProp} from "./Album";


function AlbumList() {

    const [albums, setAlbums] = useState<Array<AlbumProp>>([])
    const {id} = useParams<Params>()

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

                {albums.map((item:AlbumProp) => {
                    return <Album
                        id={item.id}
                        userId={item.userId}
                        title={item.title}
                        key={item.id}
                    />
                })}

            </div>

        </>
    )
}


export default AlbumList
