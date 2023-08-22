import { Router } from  'express';
import ContactForm from '../models/ContactForm.js';

const router = Router();

// Create comment form route
router.post("/", async (request, response) => {
  try {
    const newContactForm = new ContactForm(request.body);

    const data = await newContactForm.save();

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError')
    return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all contact forms route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}
    console.log(query);

    const data = await ContactForm.find(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single contact form by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await ContactForm.findById(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors)
  }
});

// Delete a contact form by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await ContactForm.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single contact form by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await ContactForm.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          email: body.email,
          feedbackType: body.feedbackType,
          subject: body.toppings,
          message: body.message,
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;

