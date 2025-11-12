import FoodItem from "./FoodItem";

function FoodList({ foodData }) {
  return (
    <>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </>
  );
}

export default FoodList;
