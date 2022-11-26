import "./App.css";
import { useEffect, useState } from "react";
import recipeData from "./assets/recipes.json";
import Recipe from "./components/Recipe.js";
import FavoritesPanel from "./components/FavoritesPanel.js";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
recipeData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  item.favorite = false;
});

/* ############################################################## */



function App() {

  const [data, setData] = useState(recipeData);
  const [time, setTime] = useState(0);
  const [favorites, setFavorites] = useState({});

  const [sort, setSort] = useState("Rating");
  const [snack, setSnack] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [dessert, setDessert] = useState(false);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    //Runs only on the first render
    sortRecipes("Rating")
    setLoading(false)
  }, []);

  //add or remove favorites
  function updateFavorite(item, add) {
    let tempData = data;
    tempData.forEach((element) => {
      if (element.name === item.name) {
        if (add) {
          element.favorite = true;
          setTime(time + item.cookTime);
          let tempFavorites = favorites;
          tempFavorites[item.name] = item.cookTime
          setFavorites(tempFavorites)
        }
        else {
          element.favorite = false;
          setTime(time - item.cookTime);
          let tempFavorites = favorites;
          tempFavorites[item.name] = 0
          setFavorites(tempFavorites)
        }
      }
    });
    setData(tempData);
  }

  function sortRecipes(sort) {
    //Sort by ascending
    if (sort === "Cook Time") {
      const tempRecipes = recipeData.sort(function (a, b) { return a.cookTime - b.cookTime });
      setData(tempRecipes);
    }

    //Sort by descending Rating
    else {
      const tempRecipes = recipeData.sort(function (a, b) { return b.rating - a.rating });
      setData(tempRecipes);
    }
  }

  function onChangeValue(event) {
    const val = event.target.value;
    if (val === "Rating" || val === "Cook Time") {
      setSort(val)
      sortRecipes(val);
    }
    else if (val === "Snack") {
      setSnack(!snack)
    }
    else if (val === "Dinner") {
      setDinner(!dinner)
    }
    else if (val === "Dessert") {
      setDessert(!dessert)
    }
    else if (val === "Easy") {
      setEasy(!easy)
    }
    else if (val === "Medium") {
      setMedium(!medium)
    }
    else if (val === "Hard") {
      setHard(!hard)
    }
  }

  function resetFilters() {
    setSnack(false)
    setDinner(false)
    setDessert(false)
    setEasy(false)
    setMedium(false)
    setHard(false)

    document.getElementById("snack").checked = false;
    document.getElementById("dinner").checked = false;
    document.getElementById("dessert").checked = false;
    document.getElementById("easy").checked = false;
    document.getElementById("medium").checked = false;
    document.getElementById("hard").checked = false;
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Bon Appetit Recipes</h1>
      </div>
      <br></br>
      <div className="Main-grid">
        <div>
          <div className="Side-bar" onChange={onChangeValue}>
            <h3>Sort by:</h3>
            <input type="radio" id="rating" name="sort" value="Rating" defaultChecked="true"></input>
            <label for="rating">   Rating</label><br></br>
            <input type="radio" id="cook-time" name="sort" value="Cook Time" ></input>
            <label for="cook-time">   Cook Time</label><br></br>
            <h3>Recipe Type:</h3>
            <input type="checkbox" id="snack" name="recipe-type" value="Snack" ></input>
            <label for="snack">  Snack</label><br></br>
            <input type="checkbox" id="dinner" name="recipe-type" value="Dinner"></input>
            <label for="dinner">  Dinner</label><br></br>
            <input type="checkbox" id="dessert" name="recipe-type" value="Dessert"></input>
            <label for="dessert">  Dessert</label><br></br>
            <h3>Recipe Difficulty:</h3>
            <input type="checkbox" id="easy" name="difficulty" value="Easy"></input>
            <label for="easy">  Easy</label><br></br>
            <input type="checkbox" id="medium" name="difficulty" value="Medium"></input>
            <label for="medium">  Medium</label><br></br>
            <input type="checkbox" id="hard" name="difficulty" value="Hard"></input>
            <label for="hard">  Hard</label><br></br>
            <br></br>
            <button onClick={() => resetFilters()}> Reset Filters</button>
          </div>
          <div>{FavoritesPanel(data, favorites, time)}</div>
        </div>
        <div className="flex-container">
          {isLoading === false && recipeData.map((item) => {
            if ((item.type === "Snack" && snack) || (item.type === "Dinner" && dinner)
              || (item.type === "Dessert" && dessert)
              || (!snack && !dinner && !dessert)) {
              if ((item.difficulty === "Easy" && easy) || (item.difficulty === "Medium" && medium)
                || (item.difficulty === "Hard" && hard)
                || (!easy && !medium && !hard)) {
                return Recipe(item, updateFavorite)
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

