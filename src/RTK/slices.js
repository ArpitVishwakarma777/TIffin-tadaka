import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginStatus: "LogOut",
  showLogin: false,
  showProfile: false,
};
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
      state.showProfile=action.payload
    },
  },
});
export const { setLogout, setSignUp, setShowLogin } = loginSlice.actions;
export const {setShowProfile}= profileSlice.actions 
export default loginSlice.reducer;
export const profileReducer = profileSlice.reducer;
