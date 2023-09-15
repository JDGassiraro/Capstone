import html from "html-literal";
import logoURL from "../images/logoDesigns/workingLogo.png";
console.log(logoURL);
import  {selectText}  from "../utility/games";

export default (links) => html ` <nav>
<i class="fas fa-bars"></i>
<div class="nav-layout hidden--mobile">
    <div><a class="nav-logo" href="Home"><img src= "${logoURL}" alt="logo"></a></div>
    <ul class="nav-ul">
        ${links
            .map(
            (link) =>
                html `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
            )
            .join("")}
        <!--<li><a href="home.html"><img class="nav-logo" src= "${logoURL}" alt="logo"></a></li>
        <li><a href="gameList.html">Games</a></li>
        <li><a href="multiplayer.html">Multiplayer</a></li>
        <li><a href="aboutUs.html">About Us</a></li>
        <li><a href="contactUs.html">Contact Us</a></li>
        <li><a href="lessonPlanner.html">Lesson Planner</a></li>
        <li>Search Bar Here</li> -->
    </ul>
    <div class="search-div">
            <label class="nav-search" for="nav-search"></label>
            <input class="search-field" type="search" id="nav-search" placeholder="Search the Site" name="qu" maxlength = 30>
            <!-- <button onclick="selectText()"><input class="search-button" type="button" value="Search"></button> -->
            <a href="#"><input class="search-button" type="button" value="Search"></a>
            <!-- selectText(input) -->
    </div>
</div>
</nav>

`;
