import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 .,!?'"-]*$/
  },
  email: {
    type: String,
    required: true,
    validate: /^\w+/
  },
  feedbackType: {
    type: String,
    required: true,
    enum: ["game-pitch", "website-suggestion", "game-bug-issue", "other"]
  },
  subject: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^\w+/
  }
});

const ContactForm = mongoose.model("ContactForm", contactFormSchema);

export default ContactForm;
