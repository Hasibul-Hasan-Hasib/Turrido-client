import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './TourDetails';
import Filters from './Filter';
import { Badge, Container, Grid, LoadingOverlay, Pagination, Rating, SimpleGrid } from '@mantine/core';
import { IconBath, IconBed, IconMapPin, IconRuler2 } from '@tabler/icons';
import useData from '../../hooks/useData';
import Loading from '../../shared/Loading/Loading';


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
        <Container size='xl' className='my-24 w-screen'>
            <div className='mb-5 flex justify-between'>
                <Pagination size="md" color='indigo' siblings={3} page={activePage} onChange={setPage} total={Math.ceil(items.length / itemPerPage)} />
                <label htmlFor="my-modal-3" className="btn">open modal</label>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative bg-gray-100">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <Filters></Filters>
                    </div>
                </div>
            </div>
            <SimpleGrid 
                cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 },
                { maxWidth: 'md', cols: 2, spacing: 'md' }]}>
                {
                    isLoading === false ?
                        items[0] ? items.slice(pageVisited, pageVisited + itemPerPage).map((tour) => (
                            <Link className="card card-compact bg-gray-800 shadow-xl" to={`tours/${tour.tour_id}`}>
                                <figure><img className='h-72' src={tour.img1} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h1 className="card-title pl-3 text-2xl">{tour.loc}</h1>
                                    <h2 className='pl-3 text-left text-xl'>৳ {tour.price}</h2>
                                    <Rating className='pl-3' value={tour.rating} readOnly />
                                </div>
                            </Link>
                        ))
                            :
                            <Container size='lg' mt='13rem' style={{ textAlign: 'center' }}>
                                <h1>Sorry No Data</h1>
                            </Container>
                        :
                        <Loading></Loading>
                }
            </SimpleGrid>
        </Container>
    );
};

export default Tours;