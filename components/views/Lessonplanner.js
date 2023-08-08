import html from "html-literal";

export default () => html `<h1>
      Lesson Planer Page
</h1>
<div>
      <img class="banner-image" src="images/educationImages/apple-4958609_1280.jpg" alt="banner image">
</div>

<div class="lp-dropdown">
      <label for="weekplanner">Select Cirriculum Week:</label>
            <select name="weekplanner" id="weekplanner">
                  <option value="Week 1">Week 1</option>
                  <option value="Week 2">Week 2</option>
                  <option value="Week 3">Week 3</option>
                  <option value="Week 4">Week 4</option>
                  <option value="Week 5">Week 5</option>
            </select>
</div>

<div class="lp-result-info">
      <img alt="school image">
            <div>
                  <h3>Week PlaceHolder Text</h3>
                  <p>This is the advised games for the cirriculum period selected</p>
            </div>
      <img alt="school image">
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
