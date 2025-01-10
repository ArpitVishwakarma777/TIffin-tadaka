import { configureStore } from "@reduxjs/toolkit";
import loginReducer, { popupReducer } from "../RTK/slices";
import { profileReducer, taddressReducer, addCartReducer } from "../RTK/slices";
import { userReducer } from "../RTK/slices";
const store = configureStore({
  reducer: {
    managetAddressStatus: taddressReducer,
    manageLoginStatus: loginReducer,
    manageProfileStatus: profileReducer,
    managePopupStatus: popupReducer,
    manageUserStatus: userReducer,
    manageAddCartData: addCartReducer,
  },
});

export default store;

