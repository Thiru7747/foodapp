function FoodList({ foodData }) {
  return (
    <>
      {foodData.map((food) => (
        <h1 key={food.id}>{food.title}</h1>
      ))}
    </>
  );
}

export default FoodList;
