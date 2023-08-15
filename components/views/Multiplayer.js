import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";
import * as images from "../../images";

export default (state) => html `<h1>
      Multiplayer Page
</h1>

<!--Container for the Particular Multiplayer Game Selected-->
<div class= "select-multiplayer-container">
      <div class= "select-multiplayer-image">
            <img src="${stockURL}" alt="multiplayer game image">
      </div>

      <!--Particular Multiplayer Game-->
      <div class="multiplayer-game-information">
            <h2>Game Title</h2>
            <p>Multiplayer Game Description Multiplayer Game Description Multiplayer Game Description</p>
            <input type="button" value="Play">
      </div>

</div>

<div>

</div>

<!-- Multiplayer Games Selection -->
<div class="game-section">
    <h3 class="game-section-header">Other Multiplayer Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
    </div>
</div>



`;
