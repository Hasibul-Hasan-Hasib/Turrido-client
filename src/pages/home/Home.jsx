import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Button, Container, Grid } from '@mantine/core'
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <Parallax pages={2} className='bg-main overflow-hidden'>
            <ParallaxLayer offset={0} speed={0.25}>
                <Container size='lg'>
                    <Grid align='center' gutter={80} className='my-8'>
                        <Grid.Col span={5}>
                            <img src='https://raw.githubusercontent.com/Hasibul-Hasan-Hasib/HSB-BLOGS/main/src/Assets/Images/1.png' className='rounded-lg' alt="" />
                        </Grid.Col>
                        <Grid.Col span={7} className="text-left my-auto">
                            <h1 className='text-4xl font-bold text-primary'>Find Your Property</h1>
                            <p className='text-2xl my-3 text-secondary'>Gain access to comprehensive and minute knowledge of the local
                                property market, allowing you to fully understand.</p>
                            <Button component={Link} to='/' color='cyan' variant='outline'>Find Home Now!</Button>
                        </Grid.Col>
                    </Grid>
                </Container>
            </ParallaxLayer>
            <ParallaxLayer offset={0.25} speed={0.5}>
                {/* <h1 className='text-primary font-bold text-5xl'>this is the Second Layer</h1> */}
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;