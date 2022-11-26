// Component that displays a recipe
function Recipe(item, updateFavorite) {
    return (
        
        <div className="card">
            <img src={item.image} alt="card" style={{width:'100%'}}/>
            <div class="text-container">
                <p>{item.type}</p>
                <h2>{item.name}</h2>
                <p>Recipe Difficulty: {item.difficulty}</p>
                <p>Rating: {item.rating}</p>
                <p>Cook Time: {item.cookTime} minutes</p>
                {!item.favorite && <button onClick={() => updateFavorite(item, true)}> Add to Favorites</button>}
                {item.favorite && <button onClick={() => updateFavorite(item, false)}> Remove from Favorites</button>}
            </div>
        </div>
     
    );
  }
  
  export default Recipe;
  