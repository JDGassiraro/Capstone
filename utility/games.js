import html from "html-literal";
import * as store from "../store";

//checks to see if the search string is equal to a game title
export const confirmSearchResults = (gameInformation, searchString) => {
    if(gameInformation.title !== searchString){
        document.querySelector("#resultPositive").classList.toggle("trueHidden");
        document.querySelector("#negativePositive").classList.toggle("trueHidden");
    }
}

//Uses the value from the search bar to display games
export const renderSearchResults = (gameInformation, currentSearchString) => {

            //returns a game if it exactly matches the title
            return gameInformation
            .filter(query => query.title === currentSearchString)
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


