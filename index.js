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
    document.querySelector("nav > div").classList.toggle("hidden--mobile")
  });
if(state.view === "Home"){
    //displays text on top of a game image when a user mouses over it
document.querySelector(".game-section-list > a > div > img").addEventListener("mouseover", () => {
  document.querySelector(".game-section-list > a > div > p").classList.remove("hidden")
  // document.querySelector(".game-section-list > a > div > p").classList.add(".gsltext-transition")
})

//removes the text from on top of a game image when a user mouses outside a game image
document.querySelector(".game-section-list > a > div > img").addEventListener("mouseleave", () => {
  document.querySelector(".game-section-list > a > div > p").classList.add("hidden")
})
}

  if(state.view === "Contactus") {
    //CONTACT US FORM STARTS HERE
    // Add an event handler for the submit button on the form
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create a request body object to send to the API
      const requestData = {
        name: inputList.name.value,
        email: inputList.email.value,
        feedbackType: inputList.feedback.value,
        subject: inputList.subject.value,
        message: inputList.msg.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new comment
        .post(`${process.env.CAPSTONE_API_URL}/contactForms`, requestData)
        .then(response => {
          console.log(response.data);
          //wipes the current comment from the textarea elements
          contactForm.reset();
          //TEXT SAYING THANK YOU?
          // router.navigate("/Contactus");
        })
        // If there is an error log it to the console
        .catch(error => {
          console.log("It puked", error);
        });
    });
  }

  if (state.view === "Aboutus") {
    //add or remove paragraphs in the About Us Page w/Student Button
    document.querySelector("#student-button").addEventListener("click", () => {
      document.querySelector("#text-organizer > div:first-child").classList.toggle("trueHidden");
    })

    //add or remove paragraphs in the About Us Page w/Educator Button
    document.querySelector("#educator-button").addEventListener("click", () => {
      document.querySelector("#text-organizer > div:last-child").classList.toggle("trueHidden");
    })
  };

  if (state.view === "Gamespecific") {
    //add comment button under game specific game page when typing a comment.
    document.querySelector("form > textarea").addEventListener("input", () => {
      document.querySelector("form > .comment-button").classList.remove("trueHidden");
    })

    // //reveals comment history once one is sent by the comment button and returned by the database
    // document.querySelector("comment-record-div > textarea").addEventListener("input", () => {
    //   document.querySelector(".gs-order-small > comment-record-div > textarea").classList.remove("trueHidden");
    // })

    //COMMENT FORM STARTS HERE
    // Add an event handler for the submit button on the form
    const commentForm = document.querySelector("form");
    commentForm.addEventListener("submit", event => {
      event.preventDefault();

      // Get the form element
      const inputList = event.target.elements;
      console.log("Input Element List", inputList);

      // Create a request body object to send to the API
      const requestData = {
        comment: inputList.comments.value
      };
      // Log the request body to the console
      console.log("request Body", requestData);

      axios
        // Make a POST request to the API to create a new comment
        .post(`${process.env.CAPSTONE_API_URL}/comments`, requestData)
        .then(response => {
          console.log(response);
          store.Gamespecific.commentHistory.push(response.data.comment);
            //wipes the current comment from the textarea elements
          commentForm.reset();
          router.navigate("/Gamespecific");
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
        //Permissions API
        navigator.permissions.query({ name: "geolocation" }).then(result => {
            //if result in the permissions query is not strictly granted
          if(result.state !== "granted"){
            console.log(result);
              done();
              document.querySelector(".api-info-statement.weather-api").classList.add("hidden");
              return result;
          }
          navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude.toFixed(4);
            const lon = position.coords.longitude.toFixed(4);
            axios
              // Get request to retrieve the current weather data and city name using Geolocator's lat and lon coords and API key
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
