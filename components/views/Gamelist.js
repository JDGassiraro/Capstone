import html from "html-literal";
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
    <h3 class="game-section-header">Most Popular Games on Brain Waves Games</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.diverUnderwater}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.babyForestDragon}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.koiFish}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.joustingKnights}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.rocketship}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.snowyMountains}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.snake}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.bigfoot}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horseRace}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.guitarFrog}"  alt="game image"></a>
    </div>
</div>

<div class="game-section">
    <h3 class="game-section-header">Most Popular Games this Week</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.handDrawnPenguins}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.mummy}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.wraith}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.volcano}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.anteaterInNature}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.books}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.horse}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.calendar}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.skylineEnforcers}"  alt="game image"></a>
        <a href="Gamespecific"><img src="${images.appleOnDesk}"  alt="game image"></a>
    </div>
</div>

`;
