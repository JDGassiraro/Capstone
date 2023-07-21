import html from "html-literal";

export default (links) => html ` <nav>
<i class="fas fa-bars"></i>
<ul class="nav-ul hidden--mobile nav-links">
    <li><a href="home.html"><img class="nav-logo" src="images/logoDesigns/workingLogo.png" alt="logo"></a></li>
    <li><a href="gameList.html">Games</a></li>
    <li><a href="multiplayer.html">Multiplayer</a></li>
    <li><a href="aboutUs.html">About Us</a></li>
    <li><a href="contactUs.html">Contact Us</a></li>
    <li><a href="lessonPlanner.html">Lesson Planner</a></li>
    <li>Search Bar Here</li>
</ul>
</nav>`
