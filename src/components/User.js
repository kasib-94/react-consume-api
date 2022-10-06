import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


function User() {

    const [user, setUser] = useState([])
    const {id} = useParams()
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                const data = await response.json();
                console.log(data)
                await setUser(data)

            } catch (err) {
                console.log(err)

            }
        }

        fetchData()
        console.log(user)

    }, [])


    return (
        <>

            <div className="flex-col flex-wrap justify-between overflow-y-auto w-1/3 pt-5 ">
                <div className="w-80 mx-auto mt-2 block">
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left">Name
                        :</label>
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left"> {user.name}</label>
                </div>

                <div className="w-80 mx-auto mt-2 block">
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left">Username
                        :</label>
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left"> {user.username}</label>
                </div>
                <div className="w-80 mx-auto mt-2 block">
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left">City
                        :</label>
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left"> {user.address.city}</label>
                </div>

                <div className="w-80 mx-auto mt-2 block">
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left">Webiste
                        :</label>
                    <label htmlFor="small-input"
                           className=" text-2xl  font-medium text-gray-900 dark:text-gray-300 text-left"> {user.website}</label>
                </div>


            </div>

        </>
    )
}

export default User
