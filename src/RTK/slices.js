import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: "SignUp",
  showLogin: false,
  showProfile: false,
  showPopup: false,
  user: {},
  list: [],
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
  },
});
export const { setHiddenPopup, setshowPopup } = popupSlice.actions;
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
export const wishlistSlice = createSlice({
  name: "manageWishlistStatus",
  initialState,
  reducers: {
    addlist: (state, action) => {
      state.list.push(action.payload);
    },
    removelist: (state, action) => {},
  },
});
export const userSlice = createSlice({
  name: "manageUserStatus",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = {};
    },
  },
});
export const userReducer = userSlice.reducer;
export const {setUser,removeUser} = userSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
export const { addlist, removelist } = wishlistSlice.actions;

export const { setLogout, setSignUp, setShowLogin } = loginSlice.actions;
export const { setShowProfile } = profileSlice.actions;
export default loginSlice.reducer;
export const profileReducer = profileSlice.reducer;
