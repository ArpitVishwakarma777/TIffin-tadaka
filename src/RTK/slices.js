import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loginStatus: "SignUp",
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
  },
});
export const { setLogout, setSignUp } = loginSlice.actions;
export default loginSlice.reducer;
