import html from "html-literal";
import * as images from "../../images";

// This function will render all the images with a popularityRating of 'week'
const renderWeeklyGames = (gameInformation) => {
    return gameInformation
        .filter(game => game.popularityRating === "week")
        .map(game => html`<a href="Gamespecific"><img src="${game.image}" alt="${game.popularityRating}"></a>`)
        .join('');
};

export default (state) => html`

<div class="select-multiplayer-container">
    <div class="select-multiplayer-image">
        <img src="${images.gameInformation[3].image}" alt="multiplayer game image">
    </div>
    <div class="multiplayer-game-information">
        <h2>Game Title</h2>
        <p>${images.gameInformation[3].description}</p>
        <input type="button" value="Play">
    </div>
</div>

<div class="game-section">
    <h3 class="game-section-header">Other Multiplayer Games</h3>
    <div class="game-section-list">
        ${renderWeeklyGames(images.gameInformation)}
    </div>
</div>
`;
