import html from "html-literal";

//allows the search bar to collect the values when the user presses the search button
export const selectText = () => {

  document.querySelector(".search-div > a").addEventListener("mouseup", () => {
    let searchBar = document.querySelector("#nav-search");
      output = searchBar.target.value;

      console.log(output);
  })
}

//Uses the value from the search bar to display games
export const renderSearchResults = (gameInformation, output) => {
    return gameInformation
    .filter(query => query.title === `${input}`)
    .map(game => html`<a href="Gamespecific">
        <img src="${game.image}" alt="${game.title}">
        <p class="game-title">${game.title}</p>
    </a>`)
    .join('');
}

// Displays all games in the gameInformation array
export const showAllGames = (gameInformation) => {
    return gameInformation
        .map(game => html`<a href="Gamespecific">
                                  <img src="${game.image}" alt="${game.title}">
                                  <p class="game-title">${game.title}</p>
                          </a>`).join('');
};

// Renders all the images with a popularityRating of 'week'
export const renderWeeklyGames = (gameInformation) => {
  return gameInformation
      .filter(game => game.popularityRating === "week")
      .map(game => html`<a href="Gamespecific">
          <img src="${game.image}" alt="${game.title}">
          <p class="game-title">${game.title}</p>
      </a>`)
      .join('');
};


