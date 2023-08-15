import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";
import * as images from "../../images";

export default (state) => html`
<!--Grid Bar-->
<div class="grid-games-section">
    <h3 class="game-section-header">Featured Games</h3>
    <div class="grid-games">
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img class="grid-image" src="${stockURL}" alt="game image"></a>
    </div>
</div>

<h3 class="api-info-statement">
The weather in ${state.weather.city} is ${state.weather.description}. Temperature is ${state.weather.temp}F, and it feels like ${state.weather.feelsLike}F.
The location is ${state.weather.lat}, ${state.weather.lon}.
</h3>

<!--Most Popular Games-->
<div class="game-section">
    <h3 class="game-section-header">Most Popular Games this Week</h3>
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

<!--All-time Most Popular Games-->
<div class="game-section">
    <h3 class="game-section-header">All-time Most Popular Games</h3>
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

