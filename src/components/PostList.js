import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {useNavigate, useParams} from "react-router-dom";


function PostList() {
    const navigate = useNavigate();
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

    function addPost() {
        navigate("../newpost")
    }

    return (
        <>
            <div className="addPhoto pb-20">
                <button
                    onClick={addPost}
                    className="ml-40  bg-gradient-to-b from-blue-700 to-blue-500 font-medium p-2 md:p-4 text-white uppercase w-1/6"> Add
                    New Post

                </button>

            </div>
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
