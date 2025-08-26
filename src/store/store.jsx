import {configureStore} from '@reduxjs/toolkit'
import UserReducer from '../features/user/userSlice'
import UserAuthReducer from '../features/auth/userAuthSlice';
import logger from '../middlewares/logger';


const store = configureStore({
    reducer: {
        user: UserReducer,
        auth: UserAuthReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;