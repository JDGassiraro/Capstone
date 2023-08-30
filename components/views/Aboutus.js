import html from "html-literal";

export default () => html `
<!--About US/Mission Statement-->
<div class="element-stack-center">
      <!--Mission Statement-->
      <h1 id="about-us-h1">"Have a desire to learn and make it fun." </h1>
      <!--About Us text-->
      <h3 id="mission-statement">At Brain Wave Games, our mission is to teach knowledge through computer
            games so that not only will gaming be a sincerely educational experience, but also a heck of
            a lot of fun. </h3>
</div>

<div class="au-buttons">
      <button id="student-button">Dear Students</button>
      <button id="educator-button">Dear Educators</button>
</div>

<div id="text-organizer">
      <!--For Students-->
      <div class="trueHidden">
            <h2>Dear Students</h2>
            <p>We are here to back you up. If it's hard for you you to study, study here. If
               you are falling behind in school, catch up here. If you are looking to just relax
               and have a great gamer experience, have it here.
            </p>
      </div>

      <!--For Teachers-->
      <div class="trueHidden">
            <h2>Dear Educators</h2>
            <p>This site is meant to be a tool to help keep students engaged in their education. We
               personally understand that it can be difficult to keep students engaged in the classroom,
               or feel like you are competing with techonology for student's attention. That is where
               Brain Waves Games is there to help.
            </p>
      </div>
</div>
`;
