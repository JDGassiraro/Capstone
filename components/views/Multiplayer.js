import html from "html-literal";
import * as images from "../../images";

export default (state) => html `<h1>
      Multiplayer Page
</h1>

<!--Container for the Particular Multiplayer Game Selected-->
<div class= "select-multiplayer-container">
      <div class= "select-multiplayer-image">
            <img src="${images.koiFish}" alt="multiplayer game image">
      </div>

      <!--Particular Multiplayer Game-->
      <div class="multiplayer-game-information">
            <h2>Game Title</h2>
            <img src="${images.gameInformation[0].image}" alt="multiplayer game image">
            <p>${images.gameInformation[0].description}</p>
            <input type="button" value="Play">
      </div>

</div>

<div>

</div>

<!-- Multiplayer Games Selection -->
<div class="game-section">
    <h3 class="game-section-header">Other Multiplayer Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.joustingKnights}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.babyForestDragon}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.wraith}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.handDrawnPenguins}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.mongooses}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.volcano}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.skylineEnforcers}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.anteaterInNature}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.rocketship}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horseRace}"  alt="game image"></a>
    </div>
</div>
`;
