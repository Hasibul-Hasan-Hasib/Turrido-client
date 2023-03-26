import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"><span className='text-secondary'>Your</span> Next Trip Starts Here
                    </h1>
                    <p class="mb-8 leading-relaxed text-gray-400">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div class="flex justify-center">
                        <Link to='/tours' class="inline-flex text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">Search Places</Link>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center" alt="hero" src="Backpackers-bro (1).svg"/>
                </div>
            </div>
        </section>
    );
};

export default Banner;