import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {useParams} from "react-router-dom";


function PostList() {

    const [posts, setPosts] = useState([])
    const {id} = useParams()

    useEffect(() => {


        const fetchData = () => {
            if (id !== undefined) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPosts(json.filter(x => x.userId == id)))
            } else {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPosts(json))
            }
        }

        fetchData()
        console.log(posts)

    }, [])


    return (
        <>

            <div className="flex-row flex-wrap justify-between overflow-y-auto">

                {console.log(posts)}
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

        </>
    )
}

export default PostList
