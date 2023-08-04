import html from "html-literal";

export default () => html `<h1>
      Contact Us Page
</h1>

<form action="" method="POST">
<div id="form-format">
      <div class="form-field">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" placeholder="Full Name" required/>
      </div>

      <div class="form-field">
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" placeholder="you@somewhere.com"/>
      </div>

      <div class="form-field">
            <label for="feedback">Feedback Type</label>
                  <select name="feedback" id="feedback">
                        <option value="click-here">Click Here</option>
                        <option value="game-pitch">Game Pitch</option>
                        <option value="website-suggestion">Site Suggestion</option>
                        <option value="game-issue">Game Bug Issue</option>
                        <option value="other">Other</option>
                  </select>
      </div>

      <div class="form-field">
            <label for="subject">Subject:</label>
            <input type="text" name="subject" id="subject" placeholder="Subject"/>
      </div>

      <div class="form-field">
            <label class="textarea-above" for="msg">Write your message here:</label>
            <textarea name="msg" id="msg" cols="40" rows="10"></textarea>
      </div>

      <div id="contact-input-section">
            <input type="button" value="Attachments (optional)"/>

            <input type="submit" id="contact-button" value="Submit"/>
      </div>
</div>
</form>`;
