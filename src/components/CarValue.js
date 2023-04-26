import { useDispatch, useSelector } from "react-redux";

function CarValue() {
  const dispatch = useDispatch();

  const cost = useSelector(({ cars: { list, searchTerm } }) => {
    //we filter out only cars whose name includes searchTerm
    // const filteredList = list.filter((car) => {
    //   return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    //1. we can use map
    // (let carCost = 0;
    // filteredList.map((car) => (carCost += car.cost));
    // return carCost;)

    //2. using reduce instead map
    // return filteredList.reduce((acc, car) => (acc += car.cost), 0);

    //3. Or, everything binding together
    return list
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => (acc += car.cost), 0);
  });

  return <div>total: ${cost}</div>;
}

export default CarValue;
