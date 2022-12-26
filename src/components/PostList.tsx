import React, {useState, useEffect} from 'react';
import Post, {PostProps} from "./Post";
import {Params, useNavigate, useParams} from "react-router-dom";
import {PostInterface} from "../shared/type.interfaces"

function PostList() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState<Array<PostProps>>([])
    const {id} = useParams<Params>()

    useEffect(() => {


        const fetchData = () => {
            if (id !== undefined) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPosts(json.filter((x:any) => x.userId == id)))
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

                {posts.map((item : PostProps) => {
                    return<>{ <Post
                        key={item.id}
                        id={item.id}
                        userId={item.userId}
                        title={item.title}
                        body={item.body}
                        comments={true}
                    />}
                    </>
                })}

            </div>

        </>
    )
}

export default PostList
