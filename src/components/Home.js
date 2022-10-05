import React, {Component, useEffect, useState} from 'react';
import Photo from "./Photo";

class Home extends Component {
    state = {
        data: []
    }


    async componentDidMount() {

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = await response.json();
            console.log(data)
            this.setState({
                data: data
            })
        } catch (err) {
            console.log(err)

        }


    }

    render() {
        console.log('render method called')
        const {data} = this.state
        return (
            <div className="flex-row flex-wrap justify-between overflow-y-auto">
                {console.log("zaczyna sie")}
                {data.map((item) => {
                    return <Photo
                        containerSelector
                        key={item.id}
                        thumbnailUrl={item.thumbnailUrl}
                        url={item.url}
                        title={item.title}
                    />
                })}

            </div>
        )
    }
}

export default Home