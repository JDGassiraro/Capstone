import html from "html-literal";
import * as images from "../../images";
import { confirmSearchResults } from "./../../utility/games";
import { renderSearchResults } from "../../utility/games";

export default (state) => {
  // confirmSearchResults();
  console.log("Results View",state)
  return html`
<h2 id="resultPositive">Here are your search results:</h2>
<h2 class="trueHidden" id="resultNegative">Sorry the search didn't give you what you were looking for. Try checking your spelling?</h2>
  <div class="game-section-list">
    ${renderSearchResults(images.gameInformation, state.searchString)}
  </div>

`;
}
