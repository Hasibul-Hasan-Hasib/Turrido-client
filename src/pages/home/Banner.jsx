import { Image } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section class="body-font">
            <div class="flex py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"><span className='text-secondary'>Your</span> Next Trip Starts Here
                    </h1>
                    <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        <Link to='/tours' className="btn btn-secondary">Search Places</Link>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Image class="object-cover object-center" w='auto' alt="hero" src="Backpackers-bro (1).svg" />
                </div>
            </div>
        </section>
    );
};

export default Banner;