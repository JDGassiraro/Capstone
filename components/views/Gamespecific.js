import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";

export default () => html `
<h1>Game Specific Page</h1>

<!--Game Image-->
<div class="gs-image-div">
    <img id="gs-image" src="${stockURL}" alt="Game Image">
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

    <div class="gs-order-small">
        <form id="comment" method="POST" action="">
            <h3>Send a Comment</h3>
            <label class="textarea-above" for="comments"></label>
            <textarea name="comments" id="comments" cols="40" rows="10"></textarea>
            <input type="submit" class="comment-button hidden" name="comments" value="Comment">
        </form>
    </div>
</div>

<!--Similar Games-->
<div class="game-section">
    <h3 class="game-section-header">Similar Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${stockURL}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
        <a href="Gamespecific"><img src="${stockURL}" alt="game image"></a>
    </div>
</div>
`;
