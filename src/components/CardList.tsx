import React, {useState, useEffect} from 'react';
import Post from "./Post";
import {Params, useParams} from "react-router-dom";
import Card, {CardProps} from "./Card";

export interface CardListProps{
    albumId?:Array<CardProps>
}
function CardList({
                      albumId
                  }:CardListProps) {

    const [cards, setCards] = useState<Array<CardProps>>([])
    const {id} = useParams<Params>()

    useEffect(() => {


        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => setCards(json.filter((x:{albumId:any}) => x.albumId == id)))
        }
        if (id !== undefined) {
            fetchData()
        }
        if (id === undefined) {
            fetch('https://jsonplaceholder.typicode.com/photos')
                .then(response => response.json())
                .then(json => setCards(json.filter((x:{albumId:any}) => x.albumId == albumId)))
        }
        console.log(cards)

    }, [])


    return (
        <>

            <div className="flex-row flex-wrap justify-between overflow-y-auto">

                {cards.map((item) => {
                    return <Card
                        id={item.id}
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
