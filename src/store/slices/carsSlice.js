import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  //for initial state we provide properties that formSlice will keep track of
  initialState: {
    searchTerm: "",
    list: [],
  },
  reducers: {
    //how we will change state
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //our [] of cars at line 8 is accesible with 'state.cars'
      state.list.push({
        //we make assumptuion that our action.payload will be obj:
        //action.payload ={ name: '', cost: 'some number'}
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //assumption that action.payload is our ID of the car we want to remove
      //but we must assign newly filtered array to some constant
      const updated = state.list.filter((car) => car.id !== action.payload);
      state.list = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
//exporting combine reducer
export const carsReducer = carsSlice.reducer;
