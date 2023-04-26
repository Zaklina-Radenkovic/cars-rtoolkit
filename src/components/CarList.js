import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

//we need to access our store in order to display list of cars
function CarList() {
  const dispatch = useDispatch();
  // //destructuring in helping to make derive state for searchterm
  // const cars = useSelector(({ cars: { list, searchTerm } }) => {
  //   return list.filter((car) =>
  //     car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //for the purpose of having highlighted searchTerm we need to update useselector
  //we need to include form
  //and we need to destructure obj (that is returned) at the beginning in order to have access to them
  const { cars, name } = useSelector(({ form, cars: { list, searchTerm } }) => {
    const filteredCars = list.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //and we need to return obj, because we need searchTerm
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  return (
    <div className="car-list">
      {cars.map((car) => {
        //decide if this car should be bold
        const bold =
          name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
          <div key={car.id} className={`panel ${bold && "bold"}`}>
            <p>
              {car.name} - ${car.cost}
            </p>
            <button
              className="button is-danger"
              onClick={() => handleCarDelete(car)}
            >
              Delete
            </button>
          </div>
        );
      })}
      <hr />
    </div>
  );
}

export default CarList;
