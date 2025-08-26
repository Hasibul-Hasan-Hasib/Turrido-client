import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Pagination, Rating } from '@mantine/core';
import useData from '../../hooks/useData';
import Loading from '../../shared/loading/Loading';


const Tours = () => {



    const { tours, isLoading } = useData();


    
    const items = tours;
    const [activePage, setPage] = useState(1);
    const itemPerPage = 9;
    const pageVisited = (activePage - 1) * itemPerPage;






    return (
        <div className='container my-24 mx-auto'>
            {
                isLoading === true ? <div className='my-40'><Loading/></div> :
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                        {
                            items[0] ? items.slice(pageVisited, pageVisited + itemPerPage).map((tour) => (
                                <Link className="card card-compact bg-gray-800 shadow-xl" to={`/tours/${tour.tour_id}`}>
                                    <figure><img className='h-96 w-100 aspect-video' src={tour.img1} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h1 className="card-title pl-3 text-2xl">{tour.loc}</h1>
                                        <h2 className='pl-3 text-left text-xl'>৳ {tour.price}</h2>
                                        <Rating className='pl-3' value={tour.rating} readOnly />
                                    </div>
                                </Link>
                            ))
                                :
                                <Container size='xl' mt='13rem'>
                                    <h1 className='text-4xl text-center'>Sorry No Data</h1>
                                </Container>
                        }
                    </div>
            }
                <Pagination className='my-10' size="lg" color='primary' siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />
        </div>
    );
};

export default Tours;