import Banner from './Banner';
import CardSlide from './CardSlide';
import HomeVideo from './HomeVideo';
import Contact from '../../shared/contact/Contact';



const Home = () => {
    return (

        <div className='container mx-auto'>
            <Banner />
            <CardSlide />
            <HomeVideo />
            <Contact />
        </div>
    );
};

export default Home;