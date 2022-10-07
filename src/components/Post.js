import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export const Post = ({

                         userId,
                         id,
                         title,
                         body
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
                    <p
                        className="text-gray-600">
                        <p>author:</p>
                        <div
                            onClick={linkToUser}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 border border-blue-700 rounded"
                        >{data.username}

                        </div>


                    </p>
                </div>
            </div>

        )
    }
}

export default Post
