import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid } from '@mantine/core';
import useData from '../../hooks/useData';
import Description from './Description/Description';
import Reviews from '../../components/Reviews/Reviews';



const TourDetails = () => {

    const [checked, setChecked] = useState()
    const { id } = useParams();


    return (
        <div className="my-12 text-white">


            {/* title */}

            <Container size='xl' className='flex justify-between'>
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
            </Container>




            {/* image gallery and carousel */}

            <Container size='xl'>
                <div className="my-6 md:grid md:max-w-full md:grid-cols-3 md:gap-x-8">
                    <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                        <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Two each of gray, white, and black shirts laying flat." className="h-full w-full object-cover object-center" />
                    </div>
                    <div className="hidden lg:grid md:grid-cols-1 md:gap-y-8">
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain black basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                            <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain gray basic tee." className="h-full w-full object-cover object-center" />
                        </div>
                    </div>
                    <div className="hidden aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg md:aspect-w-3 md:aspect-h-4 lg:block">
                        <img src="https://images.pexels.com/photos/26150745/pexels-photo-26150745/free-photo-of-green-grassland-with-trees-in-countryside.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Model wearing plain white basic tee." className="h-full w-full object-cover object-center" />
                    </div>


                </div>
                <div className="carousel carousel-center rounded-box space-x-4 lg:hidden">
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                            className="rounded-box w-full" />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                            className="rounded-box" />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                            className="rounded-box " />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                            className="rounded-box " />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                            className="rounded-box " />
                    </div>
                    <div className="carousel-item w-full md:w-1/2">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                            className="rounded-box" />
                    </div>
                </div>
            </Container>



            {/* booking information */}

            <Container size='xl' className='mt-10'>
                <Grid justify='space-between'>
                    <Grid.Col sm={12} md={7}>
                        <Description></Description>
                        {/* Traveler Photo
                        Reviews */}
                        <Reviews></Reviews>
                    </Grid.Col>
                    <Grid.Col sm={12} md={4.8}>
                        <div className='bg-gray-800 rounded-lg p-10 h-min mb-5'>
                            <h1 className='text-3xl text-left'>$210</h1>
                        </div>
                        <div className='bg-gray-800 rounded-lg p-5 h-min'>
                            <h1 className='text-3xl text-left'>$210</h1>
                        </div>
                    </Grid.Col>
                </Grid>
            </Container>

        </div>
    );
};

export default TourDetails;