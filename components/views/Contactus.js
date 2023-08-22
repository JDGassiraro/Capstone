import html from "html-literal";

export default (state) => html `<h1>
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
            <input type="email" name="email" id="email" placeholder="you@somewhere.com" required/>
      </div>

      <div class="form-field">
            <label for="feedback">Feedback Type</label>
                  <select name="feedback" id="feedback" required>
                        <option disabled selected value="">Click for Options</option>
                        <option value="game-pitch">Game Pitch</option>
                        <option value="website-suggestion">Site Suggestion</option>
                        <option value="game-bug-issue">Game Bug Issue</option>
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
            <!-- <label for="attachements"></label>
            <input type="file" class="file-button" id ="attachements" name="attachements" accept=".pdf, .doc, .docx, .jpg, .jpeg" multiple/> -->

            <input type="submit" id="contact-button" value="Submit"/>
      </div>
</div>
</form>
`;
