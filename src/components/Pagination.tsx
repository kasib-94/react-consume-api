import React, {Dispatch, SetStateAction} from 'react';
import './Pagination.css'

interface PaginationProps{
    totalPosts : number
    postsPerPage : number
    setCurrentPage : Dispatch<SetStateAction<number>>
    currentPage : number
}
const Pagination = ({
                        totalPosts,
                        postsPerPage,
                        setCurrentPage,
                        currentPage
}:PaginationProps) => {
    let pages = []

    for (let i = 0; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div className='pagination'>
            {
                pages.map((page, index) => {
                    return <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>

                        {page} </button>
                })}
        </div>
    )

}

export default Pagination;