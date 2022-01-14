import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: usersData,
  },
  reducers: {
    addUser: (state, action) => {},
  },
});

// export const { login, logout } = userSlice.actions;
export default userSlice.reducer;