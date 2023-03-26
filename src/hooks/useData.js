import { useEffect, useState } from "react"
import axios from 'axios'


const useData = () => {
    const [tours, setTours] = useState([]);
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const tourUrl = `https://turrido.onrender.com/tours`;
    const userUrl = `https://turrido.onrender.com/users`;
    const bookingsUrl = `https://turrido.onrender.com/bookings`;
    const reviewsUrl = `https://turrido.onrender.com/reviews`;



    const fetchData = async () => {
        const tourData = await axios.get(tourUrl)
            .finally(() => setIsLoading(false));
        setTours(tourData.data);

        const userData = await axios.get(userUrl)
            .finally(() => setIsLoading(false));
        setUsers(userData.data);

        const bookingsData = await axios.get(bookingsUrl)
            .finally(() => setIsLoading(false));
        setBookings(bookingsData.data);

        const reviewsData = await axios.get(reviewsUrl)
            .finally(() => setIsLoading(false));
        setReviews(reviewsData.data);
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, [])



    return { users, tours, bookings, reviews, isLoading };
}

export default useData;