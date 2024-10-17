import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Container, Grid } from '@mantine/core'
import Banner from './Banner';
import CardSlide from './CardSlide';
import Team from '../../shared/team/Team';
import HomeVideo from './HomeVideo';
import Contact from '../../shared/contact/Contact';



const Home = () => {
    return (

        <div className='container mx-auto'>
            <Banner />
            <CardSlide />
            <HomeVideo />
            <Team></Team>
            <Contact />
        </div>
    );
};

export default Home;