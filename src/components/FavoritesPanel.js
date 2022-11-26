// Aggregator Component that displays the favorites
function FavoritesPanel(data, favorites, time) {
    return (
        
        <div className="Side-bar">
          <h3>Favorites:</h3>
          <p>{data.map((item) => { if (favorites[item.name] > 0) return <div>{item.name}</div> })}</p>
          <h4>Total Cook Time: {time} min</h4>
        </div>
     
    );
  }
  
  export default FavoritesPanel;
  