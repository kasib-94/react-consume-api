import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {useParams} from "react-router-dom";


function PostList() {

    const [posts, setPosts] = useState([])
    const {id} = useParams()

    useEffect(() => {


        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setPosts(json.filter(x => x.userId == id)))
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
                        userId={item.userId}
                        title={item.title}
                        body={item.body}
                    />
                })}

            </div>

        </>
    )
}

export default PostList
