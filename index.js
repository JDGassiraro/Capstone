import Navigo from "navigo";
import { capitalize } from "lodash";
import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    <div id = "container">${Main(state)}</div>
    ${Footer()}
  `;
  afterRender(state);
  router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
  document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile")
  });

  if (state.view === "Aboutus") {
    //add or remove paragraphs in the About Us Page w/Student Button
    document.querySelector("#student-button").addEventListener("click", () => {
      document.querySelector("#text-organizer > div:first-child").classList.toggle("hidden");
    })

    //add or remove paragraphs in the About Us Page w/Educator Button
    document.querySelector("#educator-button").addEventListener("click", () => {
      document.querySelector("#text-organizer > div:last-child").classList.toggle("hidden");
    })
  };

  if (state.view === "Gamespecific") {
    //add comment button under game specific game page when typing a comment.
    document.querySelector("form > textarea").addEventListener("input", () => {
      document.querySelector("form > .comment-button").classList.remove("hidden");
    })

    //COMMENT FORM STARTS HERE
    // Add an event handler for the submit button on the form
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create a request body object to send to the API
      const requestData = {
        comment: inputList.comment.value,
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new comment
        .post(`${process.env.CAPSTONE_API_URL}/comments`, requestData)
        .then(response => {
          //  Then push the new pizza onto the Pizza state pizzas attribute, so it can be displayed in the comment list
          store.Comment.comments.push(response.data);
          //store.Comment.comments.push(request.data);
          router.navigate("/Comment");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

}

router.hooks({
  before: (done, params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // New Case for the Home View
      case "Home":

        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude.toFixed(4);
          const lon = position.coords.longitude.toFixed(4);
          axios
            // Get request to retrieve the current weather data using the API key and providing a city name
            .get(
              //Gets current weather at exact location (lat, lon) coordinates
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_API_KEY}`
            )

            .then(response => {
              // Convert Kelvin to Fahrenheit since OpenWeatherMap does provide otherwise
              const kelvinToFahrenheit = kelvinTemp =>
                Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

              // Create an object to be stored in the Home state from the response
              store.Home.weather = {
                lat: response.data.coord.lat,
                lon: response.data.coord.lon,
                city: response.data.name,
                temp: kelvinToFahrenheit(response.data.main.temp),
                feelsLike: kelvinToFahrenheit(response.data.main.feels_like),
                description: response.data.weather[0].main,
              };
              done();
            })
            .catch((err) => {
              console.log(err);
              done();
            });
        });
        break;
      default:
        done();
    }
  },
  already: (params) => {
    const view = params && params.data && params.data.view ? capitalize(params.data.view) : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(store.Home),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      if (store.hasOwnProperty(view)) {
        render(store[view]);
      } else {
        render(store.Viewnotfound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
