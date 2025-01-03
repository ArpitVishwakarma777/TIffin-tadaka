// import {configureStore} from '@reduxjs/toolkit'
// import loginReducer from '../RTK/slices'
// const store = configureStore({
//     manageLoginStatus: loginReducer
// });
// export default store;
import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { popupReducer } from "../RTK/slices";
import { profileReducer,taddressReducer } from "../RTK/slices";
import {userReducer} from '../RTK/slices'
const store = configureStore({
  reducer: {
    managetAddressStatus:taddressReducer,
    manageLoginStatus: loginReducer,
    manageProfileStatus: profileReducer,
    managePopupStatus:popupReducer,
    manageUserStatus:userReducer
  },
});

export default store;
