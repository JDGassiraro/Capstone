import html from "html-literal";

// This function will render all the images with a popularityRating of 'week'
export const renderWeeklyGames = (gameInformation) => {
  return gameInformation
      .filter(game => game.popularityRating === "week")
      .map(game => html`<a href="Gamespecific">
          <img src="${game.image}" alt="${game.title}">
          <p class="game-title">${game.title}</p>
      </a>`)
      .join('');
};


