import React, {useEffect, useState} from "react";
import Card from "./Card";
import Pagination from "./Pagination";

function Home() {

    const [photos, setPhotos] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(27)

    useEffect(() => {
        console.log("pierwsze")

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos')
                const data = await response.json();
                console.log(data)
                await setPhotos(data)

            } catch (err) {
                console.log(err)

            }
        }
        console.log("drugie")
        fetchData()
        console.log("trzecioe")


    }, [])


    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = photos.slice(firstPostIndex, lastPostIndex)

    return (
        <>

            <div className="flex-row flex-wrap justify-between overflow-y-auto">

                {console.log("zaczyna sie")}
                {currentPosts.map((item) => {
                    return <Card
                        containerSelector
                        key={item.id}
                        thumbnailUrl={item.thumbnailUrl}
                        url={item.url}
                        title={item.title}
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
