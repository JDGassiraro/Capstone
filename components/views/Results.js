import html from "html-literal";
import * as images from "../../images";
import { renderSearchResults } from "../../utility/games";
import { selectText } from "../../utility/games";

export default (state) => html `

<h2>Here are your search results:</h2>
  <div class="game-section-list">
    ${renderSearchResults(images.gameInformation)}
  </div>

`;
