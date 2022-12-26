import React, {useEffect, useState} from "react";
import Card, {CardProps} from "./Card";
import Pagination from "./Pagination";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(27)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos')
                const data = await response.json();
                await setPhotos(data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchData()


    }, [])


    function goToAddPhoto() {
        navigate("../addphoto")
    }

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = photos.slice(firstPostIndex, lastPostIndex)

    return (
        <>
            <div className="addPhoto pb-20">
                <button
                    onClick={goToAddPhoto}
                    className="ml-40  bg-gradient-to-b from-blue-700 to-blue-500 font-medium p-2 md:p-4 text-white uppercase w-1/6"> Add
                    New Photo

                </button>

            </div>
            <div className="flex-row flex-wrap justify-between overflow-y-auto">


                {currentPosts.map((item:CardProps) => {
                    return <Card

                        key={item.id}
                        thumbnailUrl={item.thumbnailUrl}
                        url={item.url}
                        title={item.title}
                        albumId={item.albumId}
                        id={item.id}
                    />
                })}
                <Pagination
                    totalPosts={photos.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Pagination>
            </div>

        </>
    )
}

export default Home
