import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export const Album = ({

                          userId,
                          id,
                          title,
                      }) => {

    const navigate = useNavigate();

    const [data, setUsername] = useState(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(response => response.json())
            .then(json => setUsername(json))


    })
    console.log(data)


    function linkToCardList() {
        console.log(data.id)
        navigate(`../cardlist/${data.id}`)

    }


    if (data !== undefined) {
        return (

            <div className="flex-row justify-evenly w-auto inline-block w-full p-4 w-50 h-40 ">
                <div className="space-y-2 h-40 ">
                    <h3 className="text-2xl font-semibold">
                        Album With Title :
                    </h3>
                    <h2>{data.title}</h2>
                    <button onClick={linkToCardList}> See Album</button>
                </div>
            </div>

        )
    }
}

export default Album
