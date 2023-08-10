// 'Import' the Express module instead of http
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import comments from "./routers/comments.js";

// Initialize the Express application
const app = express();

// Load environment variables from .env file
dotenv.config();

mongoose.connect(
  process.env.MONGODB,
  {
      // Configuration options to remove deprecation warnings, just include them to remove clutter
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// get the PORT from the environment variables, OR use 4040 as default
const PORT = process.env.PORT || 4040;

const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
   // Create the headers for response by default 200
   // Create the response body
   // End and return the response
  response.json({ message: "Service healthy" });
});

app.get("/weather/:city", (request, response) => {
  // Express adds a "params" Object to requests that has an matches parameter created using the colon syntax
  const city = request.params.city;
  // Generate a random number to use as the temperature
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
  const min = 70;
  const max = 90;
  const temp = Math.floor(Math.random() * (max - min + 1) + min);
  // handle GET request for weather with an route parameter of "city"
  response.json(
    {
      current: `The weather in ${city} is ${temp} degrees today.`
    });
});

app.post("/add", (request, response) => {
  const num1 = request.body.numberOne;
  const num2 = request.body.numberTwo;
  const responseBody = {
     sum: num1 + num2
  };
  response.json(responseBody);
});

//informs the app what route the router file will handle
app.use("/comments", comments);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
