import styles from "./fooditem.module.css";
function FoodItem({ food }) {
  return (
    <div className={styles.food_item_container}>
      <img src={food.image} alt=""></img>
      <h1>{food.title}</h1>
      <button>View Recipe</button>
    </div>
  );
}

export default FoodItem;
