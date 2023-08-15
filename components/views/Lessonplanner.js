import html from "html-literal";
import stockURL from "/images/gameImages/diverUnderwater.jpg";
import * as images from "../../images";


export default () => html `<h1>
      Lesson Planner Page
</h1>
<div class="passive-banner-image-div">
      <img class="passive-banner-image" src="${images.appleOnDesk}" alt="banner image">

      <div class="lp-dropdown">
      <label for="weekplanner">Select Cirriculum Week:</label>
            <select name="weekplanner" id="weekplanner">
                  <option value="">Click Here</option>
                  <option value="Week 1">Week 1</option>
                  <option value="Week 2">Week 2</option>
                  <option value="Week 3">Week 3</option>
                  <option value="Week 4">Week 4</option>
                  <option value="Week 5">Week 5</option>
            </select>
</div>
</div>



<div class="lp-result-info">
      <div class="lp-image">
            <img src="${images.adultsLearning}" alt="school image">
      </div>
            <div class="lp-result-text">
                  <h3 class="center-header">Week PlaceHolder Text</h3>
                  <p>This area will describe the games below and the best way that they can be used
                        in a class cirriculum.
                  </p>
            </div>
      <div class="lp-image">
            <img src="${images.adultsLearning}" alt="school image">
      </div>
</div>

<div class="game-section">
    <h3 class="game-section-header">Most Popular Games this Week</h3>
    <div class="game-section-list">
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
        <a href="Gamespecific"><img src="${images.diverUnderwater}" alt="game image"></a>
    </div>
</div>

<div>
      <img>
      <img>
</div>

`;
