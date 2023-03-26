import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Container, Grid } from '@mantine/core'
import Banner from './Banner';
import Gallery from './Gallery';
import CardSlide from './CardSlide';



const Home = () => {
    return (

        <Container size='lg'>
            <Banner />
            <Gallery/>
            <CardSlide/>
        </Container>
        // <div>
        //     <Parallax pages={1} className='bg-base-100 overflow-hidden top-0 left-0' style={{display:'none'}}>
        //         <ParallaxLayer offset={0.1} speed={0.65} >

        //         </ParallaxLayer>
        //     </Parallax>
        // </div>
    );
};

export default Home;