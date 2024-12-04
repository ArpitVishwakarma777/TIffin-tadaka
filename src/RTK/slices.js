import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginStatus: "SignUp",
  showLogin: false,
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
    }
  },
});
export const { setLogout, setSignUp,setShowLogin } = loginSlice.actions;
export default loginSlice.reducer;
