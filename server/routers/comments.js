
import { Router } from  'express';
import Comment from '../models/Comment.js';

const router = Router();

// Create comment route
router.post("/", async (request, response) => {
  try {
    const newComment = new Comment(request.body);

    const data = await newComment.save();

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ('name' in error && error.name === 'ValidationError') return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all comments route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}
    console.log(query);

    const data = await Comment.find(query);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single comment by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Comment.findById(request.params.id);

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors)
  }
});

// Delete a comment by ID
router.delete("/:id", async (request, response) => {
  try {
    const data = await Comment.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch(error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single comment by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Comment.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          comment: body.comment
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
