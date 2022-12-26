import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Post, {PostProps} from "./Post";
import {CommentsInterface} from "../shared/type.interfaces";



function PostView() {
    const [post, setPost] = useState<PostProps>()
    const [comments, setComments] = useState([])
    const [deleteButton, setDelete] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))


        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(json => setComments(json))


    }, [])



    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
if (post!==undefined){
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: `${post.id}`,
                title: `${(document.getElementById('commentTitle')as HTMLInputElement).value}`,
                body: `${(document.getElementById('commentBody')as HTMLInputElement).value}`,
                email: (JSON.parse(localStorage.getItem('user') as string)).email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        window.location.reload()
}
    }

    function deleteComment(id:number   ) {

    }

    if (post !== undefined && comments !== undefined) {


        return (
<>
            <div className="mx-auto text-center">
                <>
                <Post id={post.id}
                      userId={post.userId}
                      title={post.title}
                      body={post.body}
                      comments={false}
                ></Post>
                </>
                {comments.map((item:CommentsInterface) => {
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
                            (JSON.parse(localStorage.getItem('user' )|| "" )).email == item.email ?
                                (
                                    <button

                                        onClick={event => {
                                            {deleteComment(item.id)}
                                        }}
                                        className=" mx-4 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-5 border border-red-500 w-30"
                                    >
                                        Delete Your Comment !
                                    </button>
                                ) :
                                ''
                        }
                    </div>

                })}
                <form onSubmit={handleSubmit} className="row-auto mb-10">
                    <div className="w-2/3">
                        <div className="mb-6">
                            <label htmlFor="base-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Comment
                                Title
                            </label>
                            <input type="text" id="commentTitle"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="large-input"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Comment
                                Text
                            </label>
                            <textarea rows={5} typeof={"text"} id="commentBody"
                                      className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <button
                            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-1/6">Add
                            Comment
                        </button>
                    </div>
                </form>
            </div>
</>)
    }
    else {
        return (<></>)
    }
}

export default PostView
