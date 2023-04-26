import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  //for initial state we provide properties that formSlice will keep track of
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    //how we will change state
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions;
//exporting combine reducer
export const formReducer = formSlice.reducer;
