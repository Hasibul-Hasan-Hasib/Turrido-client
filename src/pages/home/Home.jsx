import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Container, Grid } from '@mantine/core'
import Banner from './Banner';
import CardSlide from './CardSlide';
import Team from '../../shared/team/Team';
import HomeVideo from './HomeVideo';
import Contact from '../../shared/Contact/Contact';



const Home = () => {
    return (

        <Container size='xl'>
            <Banner />
            <CardSlide />
            <HomeVideo />
            <Team></Team>
            <Contact />
        </Container>
    );
};

export default Home;