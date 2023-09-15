import html from "html-literal";
import * as images from "../../images";
import { renderSearchResults } from "../../utility/games";

export default (state) => {
  console.log("Results View",state)
  return html`

<h2>Here are your search results:</h2>
  <div class="game-section-list">
    ${renderSearchResults(images.gameInformation, state.searchString)}
  </div>

`;
}
