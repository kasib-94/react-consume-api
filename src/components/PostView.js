import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Post from "./Post";
import Card from "./Card";


function PostView() {
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))

        console.log(post)

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(json => setComments(json))


    }, [])


    if (post !== undefined && comments !== undefined) {
        console.log(comments)

        return (

            <div className="mx-auto text-center">
                <div>PostView Component</div>
                <Post id={post.id}
                      userId={post.userId}
                      text={post.title}
                      body={post.body}
                      comments={false}
                ></Post>
                {comments.map((item) => {
                    return <div
                        className="w-1/3 relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                        <div className="relative flex gap-4">
                            <img
                                src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
                                className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt=""
                                loading="lazy"/>
                            <div className="flex flex-col w-full">
                                <div className="flex flex-row justify-between">
                                    <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{item.email}</p>
                                    <a className="text-gray-500 text-xl" href="#"><i
                                        className="fa-solid fa-trash"></i></a>
                                </div>

                            </div>
                        </div>
                        <p className="-mt-4 text-gray-500">{item.body}</p>
                        {

                        }
                    </div>
                })}

            </div>
        )
    }
}

export default PostView
