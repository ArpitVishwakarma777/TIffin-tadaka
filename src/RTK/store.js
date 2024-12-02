// import {configureStore} from '@reduxjs/toolkit'
// import loginReducer from '../RTK/slices'
// const store = configureStore({
//     manageLoginStatus: loginReducer
// });
// export default store;
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../RTK/slices';

const store = configureStore({
    reducer: {
        manageLoginStatus: loginReducer
    }
});

export default store;