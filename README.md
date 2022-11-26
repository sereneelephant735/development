# Development

### Link to Deployed Website
`https://sereneelephant735.github.io/development`

### Goal and Value of the Application
This application is a recipe website displaying a variety of recipes allowing users to browse through different dishes and find ones they are interested in making. If they have a specific kind of recipe in mind, they can filter for different types of recipes, such as meal type, or difficulty of recipe. They can also sort by rating or cook time for general inspiration. Users can mark favorite recipes and add them to the "Favorites" section, which lists favorite recipes and their total cook time which can help a user plan their meal and the time needed.

### Usability Principles Considered
In terms of layout, recipe cards are displayed in a grid while the sorting and filtering functionality are in a side panel on the left side of the page for easy accessibility. The recipe type and recipe difficulty sections' checkboxes are intially unchecked which shows all recipes at first, and then if users want to filter, checking a box will begin the filtering. The default is all boxes unchecked so users don't have to uncheck all the boxes first if they want to filter. Filter options within a filter category work as an "or" operator because the categories are mutually exclusive. This allows users to see, for example, dinner and dessert recipes, or easy and medium recipes at the same time. In combination, users could view all easy snack and dessert recipes, or easy and medium dinner and snack recipes. This enables flexibility for users to choose recipes according to their skill level range(ex. anything easy or medium) or for meal planning(ex. dinner and dessert). 
There is a reset filters button at the bottom of the panel to easily clear all filter checkboxes and reset filtering.
The page is sorted by rating by default to showcase the best recipes first, likely ones the user will find interesting. Users can also sort by cook time, important for users wanting to find a quick meal recipe.
The favorites section is also on the left side of the page for visibility and accessibility. It lists the recipes that are favorited as well as the total cook time for users to planning out their cooking. 
### Organization of Components
There are 3 components: App, Recipe, and FavoritesPanel. App is the main page which contains the Recipe items and FavoritesPanel.  Recipe is a component for a single recipe item, and FavoritesPanel is the aggregator component that shows a list of favorite items and total cook time. 

### How Data is Passed Down Through Components
When displaying the recipe items, App passes down the item json and updateFavorite() function as props to the Recipe component. Recipe can display each recipe card and the favorite button click triggers the updateFavorite() function in App. 
For the FavoritePanel aggregator component, App passes down the recipe data, favorites list, and cook time as props, which are displayed in the Favorites section.

### How the User Triggers State Changes
App contains state variables for the recipe data, favorites, cook time, and filtering/sorting criteria. When different filter boxes are checked, the related state variables are updated and the related recipes are shown. Similarly, when the user changes the sort criteria, the recipe data state is updated and the recipes are sorted and redisplayed accordingly. When the user adds a recipe to favorites, the favorite list and cook time states update, resulting in changes in the aggregator section. 
