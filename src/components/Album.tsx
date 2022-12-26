import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

export interface AlbumProp{
    userId? : number
    id?: number
    title? :string
}
export const Album = ({

                          userId,
                          id,
                          title,
                      }:AlbumProp) => {

    const navigate = useNavigate();

    const [data, setUsername] = useState<AlbumProp>(function (): any {
        fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
            .then(response => response.json())
            .then(json => setUsername(json))


    })

    function linkToCardList() {
        navigate(`../cardlist/${data.id}`)
    }


    if (data!==undefined) {
        return (
            <>
                <div className="flex-row justify-evenly w-auto inline-block w-full p-4 w-50 h-40 border-4">
                    <div className="space-y-2 h-40 ">
                        <h3 className="text-2xl font-semibold">
                            {data.title}
                        </h3>

                        <button onClick={linkToCardList}> See Album</button>
                    </div>
                </div>
            </>
        )
    }else {
        return (<></>)
    }
}

export default Album
