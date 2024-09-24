import React, { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Rating } from '@mantine/core';
import useData from '../../hooks/useData';


const CardSlide = () => {

    const { tours, isLoading } = useData();

    const autoplay = useRef(Autoplay({ delay: 4000 }));
    return (
        <div className='my-24'>
            <h1 className='text-3xl text-left text-white my-8'>Explore More</h1>
            <Carousel
                height='28rem'
                slideSize="30%"
                slideGap="xl"
                controlSize={40}
                controlsOffset="xl"
                sx={{ maxWidth: "91vw" }}
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 'sm' },
                ]}
                loop
                dragFree
                align="start"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                {
                    tours.map((tour) => (
                        <Carousel.Slide>
                            <div className="card card-compact bg-gray-800 shadow-xl">
                                <figure><img className='h-72' src={tour.img1} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h1 className="card-title pl-3 text-2xl">{tour.loc}</h1>
                                    <h2 className='pl-3 text-left text-xl'>৳ {tour.price}</h2>
                                    <Rating className='pl-3' value={tour.rating} readOnly />
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))
                }

            </Carousel>
        </div>
    );
};

export default CardSlide;