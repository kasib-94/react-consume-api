import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export const Post = ({

                         userId,
                         id,
                         title,
                         body,
                         comments
                     }) => {

    const navigate = useNavigate();
    const [data, setUsername] = useState(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => setUsername(json))


    })
    console.log(data)


    function linkToUser() {
        console.log(data.id)
        navigate(`../users/${data.id}`)

    }

    function linkToPost() {
        console.log(id)
        navigate(`../post/${id}`)

    }

    if (data !== undefined) {
        return (

            <div className="flex-row justify-evenly w-auto inline-block w-full p-4 max-w-lg h-60 ">
                <div className="space-y-2 h-40 ">
                    <h3 className="text-2xl font-semibold">
                        {title}
                    </h3>
                    <p className="text-gray-600">
                        {body}
                    </p>
                    <div
                        className="flex flex-row text-gray-600 ">
                        <p
                            className="text-2xl"
                        >author:</p>
                        <button
                            onClick={linkToUser}
                            className="inline-block pl-5 underline text-2xl "
                        >{data.username}

                        </button>

                        <button
                            onClick={linkToPost}
                            className="block inline-block pl-5 underline text-2xl "
                        >{comments == true ? "See Comments !" : ''}

                        </button>

                    </div>
                </div>
            </div>

        )
    }
}

export default Post
