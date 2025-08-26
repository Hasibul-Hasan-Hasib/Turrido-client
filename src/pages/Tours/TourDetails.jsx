import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@mantine/core';
import useData from '../../hooks/useData';
import Description from './Description';
import Reviews from '../../components/Reviews/Reviews';
import CardSlide from '../home/CardSlide';
import Gallery from '../../shared/Gallery/Gallery';
import Booking from './Booking';



const TourDetails = () => {

    const [checked, setChecked] = useState()
    const { id } = useParams();







    return (
        <div className="container mx-auto my-12 ">


            {/* title */}

            <div className='flex justify-between'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl text-left'>3 day tour on Bali Indonesia</h1>
                <label className="swap swap-rotate">
                    <input type="checkbox" onChange={e => setChecked(e.target.checked)} />

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                        className="icon icon-tabler icons-tabler-filled icon-tabler-heart swap-on h-10 w-10 fill-current"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" />
                    </svg>

                    <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-heart swap-off h-10 w-10"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                    </svg>
                </label>
            </div>





            
            {/* image gallery and carousel */}
            <Gallery></Gallery>




            {/* booking information */}

            <div className='mt-10'>
                <Grid justify='space-between'>
                    <Grid.Col sm={12} md={7.1}>
                        <Description></Description>
                        {/* traveler photos */}
                        <Reviews></Reviews>
                    </Grid.Col>
                    <Grid.Col sm={12} md={4.8}>
                        <Booking/>
                    </Grid.Col>
                </Grid>
            </div>

            <div className='divider'></div>

            <div>
                <CardSlide></CardSlide>
            </div>


        </div>
    );
};

export default TourDetails;