import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";

export default () => html `<h1>
      Game List Page
</h1>

<div>
      <!--Banner Image-->
      <div>
            <img src="${stockURL}" alt="banner-image">
      </div>

      <!--Container for Search Elements-->
      <div>
            <!--Search Bar-->
            <div class="search-div">
            <label class="nav-search" for="nav-search"></label>
            <input class="search-field" type="search" id="nav-search" placeholder="Search the Site" name="qu" maxlength = 30>
            <input class="search-button" type="button" value="Search">
            </div>

            <!--Dependent Drop Down Menu-->
            <div class="form-field">
            <label for="feedback">Sort By</label>
                  <select name="feedback" id="feedback">
                        <option value="click-here">Click Here</option>
                        <option value="game-pitch">Game Pitch</option>
                        <option value="website-suggestion">Site Suggestion</option>
                        <option value="game-issue">Game Bug Issue</option>
                        <option value="other">Other</option>
                  </select>
      </div>

      </div>
</div>

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

`;
