import React from 'react';

export const Card = ({

                         thumbnailUrl,
                         url,
                         title,
                         id,
                         albumId
                     }) => {
    return (
        <div
            className="inline-block  w-1/3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center">
            <a>
                <img className="rounded-t-lg" src={thumbnailUrl} alt=""/>
            </a>
            <div className="p-5">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</p>
                <a href="#"

                   className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    See Post

                </a>
            </div>
        </div>
    )
}

export default Card
