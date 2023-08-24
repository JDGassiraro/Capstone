import html from "html-literal";

import * as images from "../../images";

export default (state) => html `
<h1>Game Specific Page</h1>

<!--Game Image-->
<div class="gs-image-div">
    <img id="gs-image" src="${images.handDrawnPenguins}" alt="Game Image">
</div>

<!--Game Information-->
<div id="gs-order">

    <div class="gs-order-small">
        <div class="gs-order-small">
            <h3>Number of Plays</h3>
            <p>Number of Plays</p>
        </div>
        <div class="gs-order-small">
            <h3>Published</h3>
            <p>Date Published</p>
        </div>
    </div>

    <div class="gs-order-small">
        <h3>Update Information</h3>
        <p>Most  Recent Update Information</p>
    </div>

    <!--Comment Section-->
    <div class="gs-order-small">
        <form id="comment" method="POST" action="">
            <h3>Send a Comment</h3>
            <label class="textarea-above" for="comments"></label>
            <textarea name="comments" id="comments" cols="40" rows="10" maxlength="100"></textarea>
            <input type="submit" class="comment-button hidden" name="comment-button" value="Comment">
        </form>
        <div class=comment-record>${state.commentHistory}</div>
    </div>
</div>

<!--Similar Games-->
<div class="game-section">
    <h3 class="game-section-header">Similar Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.guitarFrog}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horse}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.anteaterInNature}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.rocketship}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.mongooses}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.skylineEnforcers}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.bigfoot}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.volcano}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.koiFish}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.books}" alt="game image"></a>
    </div>
</div>
`;
