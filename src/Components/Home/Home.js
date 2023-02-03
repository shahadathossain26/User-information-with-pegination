import React, { useEffect, useState } from 'react';
import User from '../User/User';
import ReactPaginate from 'react-paginate';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);

    const userPerPage = 3;
    const userVisited = pageNumber * userPerPage;
    const pageCount = Math.ceil(users.length / userPerPage)

    //Displaying Users
    const displayUsers = users.slice(userVisited, userVisited + userPerPage).map(user => <User
        key={user.id}
        user={user}
    ></User>)

    //Fetching Data
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className='w-3/4  mx-auto mt-10'>
            <h1 className='text-5xl font-bold text-black mb-10'>Users Information</h1>
            <div className='border border-solid border-black rounded-xl shadow-xl'>
                {displayUsers}
            </div>
            <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"pegination"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"disableButton"}
                activeClassName={"activeButton"}

            ></ReactPaginate>
        </div>
    );
};

export default Home;