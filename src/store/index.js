import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlice";

const store = configureStore({
  //this reducer will dictate what general shape of our state looks inside the store
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

console.log(store.getState());
export { store, addCar, removeCar, changeSearchTerm, changeCost, changeName };
