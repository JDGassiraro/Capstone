import html from "html-literal";

export default () => html `<h1>
      Lesson Planer Page
</h1>
<div>
      <img class="banner-image" alt="banner image">
</div>
      <img class="banner-image" alt="banner image">
      <label for="feedback">Select Cirriculum Week:</label>
                        <select name="feedback" id="feedback">
                              <option value="click-here">Click Here</option>
                              <option value="game-pitch">Game Pitch</option>
                              <option value="website-suggestion">Site Suggestion</option>
                              <option value="game-issue">Game Bug Issue</option>
                              <option value="other">Other</option>
                        </select>
<div>
      <img>
            <div>
                  <h3></h3>
                  <p></p>
            </div>
      <img>
</div>

<div class="game-section">
    <h3 class="game-section-header">Most Popular Games this Week</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
        <a href="Gamespecific"><img alt="game image"></a>
    </div>
</div>

<div>
      <img>
      <img>
</div>

`;
