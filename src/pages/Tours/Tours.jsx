import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Filters from './Filter';
import { Container, Pagination, Rating, SimpleGrid } from '@mantine/core';
import useData from '../../hooks/useData';
import Loading from '../../shared/loading/Loading';


const Tours = () => {



    const [searchParams] = useSearchParams();

    const loc = searchParams.get('loc');
    const bed = searchParams.get('bed');
    const bath = searchParams.get('bath');
    const type = searchParams.get('type');
    const upper = searchParams.get('upper');
    const lower = searchParams.get('lower');


    const { tours, isLoading } = useData();
    const filter = loc !== null ? tours.filter(item => loc ? item.tour_loc.toLowerCase().includes(loc.toLowerCase()) : item)
        .filter(item => bed ? parseInt(bed) === item.bed_rooms : item)
        .filter(item => bath ? parseInt(bath) === item.bath_rooms : item)
        .filter(item => type ? parseInt(type) === item.tour_type : item)
        .filter(item => parseInt(lower) <= item.price <= parseInt(upper)) : tours



    const items = filter;
    const [activePage, setPage] = useState(1);
    const itemPerPage = 9;
    const pageVisited = (activePage - 1) * itemPerPage;






    return (
        <div className='container my-24 mx-auto '>
            <div className='mb-5 flex justify-between'>
                <Pagination size="md" color='indigo' siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />
                <label htmlFor="my-modal-3" className="btn">Filter</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative bg-gray-100">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <Filters></Filters>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default Tours;