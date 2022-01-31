import { createSlice } from "@reduxjs/toolkit";
import { usersData } from "../fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: usersData,
  },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      // eslint-disable-next-line
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
