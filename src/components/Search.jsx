import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0b529ae81c9245e79457e29a97cd54e4";

function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    function fetchFood() {
      //   const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      //   const data = await res.json();
      //   console.log(data.results);
      setFoodData([
        {
          id: 716300,
          title: "Plantain Pizza",
          image: "https://img.spoonacular.com/recipes/716300-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 647124,
          title: "Homemade Thin Crust Pizza + Pesto + Potato",
          image: "https://img.spoonacular.com/recipes/647124-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 655847,
          title: "Pesto Veggie Pizza",
          image: "https://img.spoonacular.com/recipes/655847-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 663366,
          title: "Thin Crust Genoa Salami Pizza",
          image: "https://img.spoonacular.com/recipes/663366-312x231.png",
          imageType: "png",
        },
        {
          id: 642371,
          title:
            "Elk Italian Sausage Pizza With Ricotta Cheese, Sautéd Mushrooms and Onion",
          image: "https://img.spoonacular.com/recipes/642371-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 1095810,
          title:
            "Buffalo Mozzarella & Pepperoni Pizza with a Cauliflower Crust",
          image: "https://img.spoonacular.com/recipes/1095810-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 662264,
          title: "summer vegetable pizza",
          image: "https://img.spoonacular.com/recipes/662264-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 636593,
          title: "Butternut Squash Pizza",
          image: "https://img.spoonacular.com/recipes/636593-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 663553,
          title: "Tomato and Bacon Pizza With Rice Crust",
          image: "https://img.spoonacular.com/recipes/663553-312x231.jpg",
          imageType: "jpg",
        },
        {
          id: 1096319,
          title: "Mini Vegetarian Puff Pastry Pizzas",
          image: "https://img.spoonacular.com/recipes/1096319-312x231.jpg",
          imageType: "jpg",
        },
      ]);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}

export default Search;
