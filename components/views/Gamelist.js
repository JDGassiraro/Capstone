import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";
import * as images from "../../images";

export default () => html `<h1>
      Game List Page
</h1>

<div class="passive-banner-image-div">
      <!--Banner Image-->
      <div>
            <img src="${images.nebula}" alt="banner-image">
      </div>

      <!--Container for Search Elements-->
      <div class="gl-search-tools">
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
                  <option value="">Click Here</option>
                        <optgroup label="Arcade Options">
                              <option value="strategy">Strategy</option>
                              <option value="action">Action</option>
                              <option value="adventure">Adventure</option>
                              <option value="puzzle">Puzzle</option>
                              <option value="tower-defense">Tower Defense</option>
                        </optgroup>
                        <optgroup label="Education Options">
                              <option value="math">Math</option>
                              <option value="reading">Reading</option>
                              <option value="science">Science</option>
                              <option value="history">History</option>
                              <option value="typing">Typing</option>
                              <option value="coding">Coding</option>
                        </optgroup>

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
