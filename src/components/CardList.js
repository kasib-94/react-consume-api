import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {useParams} from "react-router-dom";
import Card from "./Card";


function CardList({
                      albumId
                  }) {

    const [cards, setCards] = useState([])

    const {id} = useParams()

    useEffect(() => {


        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => setCards(json.filter(x => x.albumId == id)))
        }
        if (id !== undefined) {
            fetchData()
        }
        if (id === undefined) {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => setCards(json.filter(x => x.albumId == albumId)))
        }
        console.log(cards)

    }, [])


    return (
        <>

            <div className="flex-row flex-wrap justify-between overflow-y-auto">

                {cards.map((item) => {
                    return <Card
                        key={item.id}
                        thumbnailUrl={item.thumbnailUrl}
                        url={item.url}
                        title={item.title}
                        albumId={item.albumId}
                    />
                })}

            </div>

        </>
    )
}

export default CardList
