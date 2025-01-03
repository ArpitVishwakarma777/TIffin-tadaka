import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: "SignUp",
  showLogin: false,
  showProfile: false,
  tiffinAddress: null,
  showPopup: false,
  contentPopup: "asdfgh",
  user: {
    img: "https://res.cloudinary.com/drzc94rvk/image/upload/v1735234416/client_l1mfj3.jpg",
  },
};
export const popupSlice = createSlice({
  name: "managePopupStatus",
  initialState,
  reducers: {
    setshowPopup: (state, action) => {
      state.showPopup = true;
    },
    setHiddenPopup: (state, action) => {
      state.showPopup = false;
    },
    setContentPopup: (state, action) => {
      state.contentPopup = action.payload;
    },
  },
});
export const { setHiddenPopup, setContentPopup, setshowPopup } =
  popupSlice.actions;
export const popupReducer = popupSlice.reducer;
export const loginSlice = createSlice({
  name: "manageLoginStatus",
  initialState,
  reducers: {
    setLogout: (state, action) => {
      state.loginStatus = "LogOut";
    },
    setSignUp: (state, action) => {
      state.loginStatus = "SignUp";
    },
    setShowLogin: (state, action) => {
      state.showLogin = action.payload;
    },
  },
});
export const profileSlice = createSlice({
  name: "manageProfileStatus",
  initialState,
  reducers: {
    setShowProfile: (state, action) => {
      state.showProfile = action.payload;
    },
  },
});

export const userSlice = createSlice({
  name: "manageUserStatus",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserSubscription: (state, action) => {
      state.user.subscription.push(action.payload);
    },
    removeUser: (state, action) => {
      state.user = {
        img: "https://res.cloudinary.com/drzc94rvk/image/upload/v1735234416/client_l1mfj3.jpg",
      };
    },
  },
});
const taddressSlice = createSlice({
  name: "managetAddressStatus",
  initialState,
  reducers: {
    setTAddress: (state, action) => {
      state.tiffinAddress = action.payload;
    },
  },
});
export const { setTAddress } = taddressSlice.actions;
export const taddressReducer = taddressSlice.reducer;
export const userReducer = userSlice.reducer;
export const { setUserSubscription, setUser, removeUser } = userSlice.actions;
export const { setLogout, setSignUp, setShowLogin } = loginSlice.actions;
export const { setShowProfile } = profileSlice.actions;
export default loginSlice.reducer;
export const profileReducer = profileSlice.reducer;
