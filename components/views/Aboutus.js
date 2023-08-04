import html from "html-literal";

/* When button is clicked, show the text. When the
   button is clicked again, make the paragrah go away.
   Do the same for the other text paragraph
let studentButton = document.querySelector('#student-button');
let educatorButton = document.querySelector('#educator-statement')

studentButton.addEventListener('click', ()=>{

})
educatorButton.addEventListener('click', ()=>{

})

.hidden{
    display: none !important;
  }
document.querySelector(".nav-links").classList.toggle("hidden--mobile");
the classList.toggle adds/removes the class

;*/

export default () => html `
<!--About US/Mission Statement-->
<div>
      <!--Mission Statement-->
      <h1 id="about-us-h1">A Thoughtful and Fun Educational Quote</h1>
      <!--About Us text-->
      <p id="mission-statement">At Brain Waves Games we believe that computer games and be equally educational and fun.</p>
</div>

<div class="au-buttons">
      <button id="student-button">Dear Students</button>
      <button id="educator-button">Dear Educators</button>
</div>

<div id="text-organizer">
      <!--For Students-->
      <div class="hidden">
            <h2>Dear Students</h2>
            <p>We are here to back you up. If it's hard for you you to study, study here. If
               you are falling behind in school, catch up here. If you are looking to just relax
               and have a great gamer experience, have it here.
            </p>
      </div>

      <!--For Teachers-->
      <div class="hidden">
            <h2>Dear Educators</h2>
            <p>This site is meant to be a tool to help keep students engaged in their education. We
               personally understand that it can be difficult to keep students engaged in the classroom,
               or feel like you are competing with techonology for student's attention. That is where
               Brain Waves Games is there to help.
            </p>
      </div>
</div>
`;
