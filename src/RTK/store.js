// import {configureStore} from '@reduxjs/toolkit'
// import loginReducer from '../RTK/slices'
// const store = configureStore({
//     manageLoginStatus: loginReducer
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { popupReducer } from "../RTK/slices";
import { profileReducer, wishlistReducer } from "../RTK/slices";

const store = configureStore({
  reducer: {
    manageLoginStatus: loginReducer,
    manageProfileStatus: profileReducer,
    manageWishlistStatus: wishlistReducer,
    managePopupStatus:popupReducer
  },
});

export default store;
