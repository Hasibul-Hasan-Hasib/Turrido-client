import React, {useRef} from 'react';
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';


const CardSlide = () => {
    const autoplay = useRef(Autoplay({ delay: 4000 }));
    return (
        <div>
            <Carousel
                withIndicators
                height='26rem'
                slideSize="30%"
                slideGap="lg"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                loop
                align="start"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
            >
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
                <Carousel.Slide>
                    <h1 className='text-3xl text-white'>Hello baby</h1>
                </Carousel.Slide>
            </Carousel>
        </div>
    );
};

export default CardSlide;