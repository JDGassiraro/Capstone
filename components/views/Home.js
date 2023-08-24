import html from "html-literal";
import * as images from "../../images";

export default (state) => html`
<!--Grid Bar-->
<div class="grid-games-section">
    <h3 class="game-section-header">Featured Games</h3>
    <div class="grid-games">
        <a href="Gamespecific"><img class="grid-image" src="${images.babyForestDragon}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.books}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.calendar}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.bigfoot}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.nebula}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.rocketship}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.joustingKnights}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.handDrawnPenguins}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.snowyMountains}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.volcano}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.skylineEnforcers}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.wraith}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.guitarFrog}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.snake}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${images.babyForestDragon}" alt="game image"></a>
    </div>
</div>

<h3 class="api-info-statement weather-api">
The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
</h3>

<!--Most Popular Games-->
<div class="game-section">
    <h3 class="game-section-header">Most Popular Games this Week</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.mongooses}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.joustingKnights}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.babyForestDragon}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horseRace}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.koiFish}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horse}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.nebula}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.snake}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.snowyMountains}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.anteaterInNature}"  alt="game image"></a>
    </div>
</div>

<!--All-time Most Popular Games-->
<div class="game-section">
    <h3 class="game-section-header">All-time Most Popular Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.diverUnderwater}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.handDrawnPenguins}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.koiFish}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.mummy}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.babyForestDragon}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.rocketship}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.bigfoot}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.guitarFrog}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.skylineEnforcers}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.volcano}"  alt="game image"></a>
    </div>
</div>

`;

