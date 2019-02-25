const searchType = document.querySelector(".type");
const searchParticipants = document.querySelector(".participants");
const searchPrice = document.querySelector(".price");
const searchAccessibility = document.querySelector(".accessibility");
//To change nav color of active link
const linkAcc = document.getElementById("linkAcc");
const linkPrice = document.getElementById("linkPrice");
const linkType = document.getElementById("linkType");
const linkPart = document.getElementById("linkPart");

// To set the event to listen to
const form = document.querySelector(".js-search-form");

//  Start of the query string
const base = `https://www.boredapi.com/api/activity`;
let activityType = null;

// Modal view to get more details
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const enter = document.getElementById("enter");

/*********** ----- TYPE SEARCH TYPE EVENT ----- **********/
searchType.addEventListener("click", function(event) {
  event.preventDefault();
  activityType = event.target.dataset["activity"];

  linkAcc.style.color = "#FFF";
  linkPrice.style.color = "#FFF";
  linkType.style.color = "#F18F01";
  linkPart.style.color = "#FFF";

  document.querySelector(".js-search-form").reset();
  document.querySelector(".errMsg").innerHTML = ``;
  document.querySelector(".js-search-results").innerHTML = ``;

  // To set search type details
  let searchInfo = "";
  searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified type (recreational, music, social, diy, cooking)</p>`;
  document.querySelector(".searchInfo").innerHTML = searchInfo;
});

/*********** ----- PARTICIPANTS SEARCH TYPE EVENT ----- **********/
searchParticipants.addEventListener("click", function(event) {
  event.preventDefault();
  activityType = event.target.dataset["activity"];

  linkAcc.style.color = "#FFF";
  linkPrice.style.color = "#FFF";
  linkType.style.color = "#FFF";
  linkPart.style.color = "#F18F01";

  document.querySelector(".js-search-form").reset();
  document.querySelector(".errMsg").innerHTML = ``;
  document.querySelector(".js-search-results").innerHTML = ``;

  // To set search type details
  let searchInfo = "";
  searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified number of participants (range 1-5, and 8)</p>`;
  document.querySelector(".searchInfo").innerHTML = searchInfo;
});

/*********** ----- COST SEARCH TYPE EVENT ----- **********/
searchPrice.addEventListener("click", function(event) {
  event.preventDefault();
  activityType = event.target.dataset["activity"];

  linkAcc.style.color = "#FFF";
  linkPrice.style.color = "#F18F01";
  linkType.style.color = "#FFF";
  linkPart.style.color = "#FFF";

  // To clear previous search
  document.querySelector(".js-search-form").reset();
  document.querySelector(".errMsg").innerHTML = ``;
  document.querySelector(".js-search-results").innerHTML = ``;

  // To set search type details
  let searchInfo = "";
  searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified price (range 0-0.6)</p>`;
  document.querySelector(".searchInfo").innerHTML = searchInfo;
});

/*********** ----- ACCESSIBILITY SEARCH TYPE EVENT ----- **********/
searchAccessibility.addEventListener("click", function(event) {
  event.preventDefault();
  activityType = event.target.dataset["activity"];

  linkAcc.style.color = "#F18F01";
  linkPrice.style.color = "#FFF";
  linkType.style.color = "#FFF";
  linkPart.style.color = "#FFF";

  // To clear previous search
  document.querySelector(".js-search-form").reset();
  document.querySelector(".errMsg").innerHTML = ``;
  document.querySelector(".js-search-results").innerHTML = ``;

  // To set search type details
  let searchInfo = "";
  searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified accessibility: 1 being not easily accessible and 0 being the most accessible (number: 0, 1, or between 0.1-0.9)</p>`;
  document.querySelector(".searchInfo").innerHTML = searchInfo;
});

/*********** ----- SUBMIT BUTTON EVENT ----- **********/

// To listen when user hits submit or press enter
form.addEventListener("submit", e => {
  // clear any errors when a form submit happens
  document.querySelector(".errMsg").innerHTML = '';
  // Extension of the query string
  let searchTerm = document.querySelector("#searchTerm").value;

  if ((activityType == 'type' && searchTerm.length == 0) || (activityType == 'type' && searchTerm.length > 0  && /^\d+$/.test(searchTerm))) {
    document.querySelector(".errMsg").innerHTML = 'Input should be a valid text, try: recreational, music, social, diy, cooking';
    return;
  }

  if ((activityType == 'participants' && searchTerm.length == 0) || (activityType == 'participants' && searchTerm.length > 0  && !(/^[-+]?[0-9]+\.[0-9]+$/.test(searchTerm))) && !(/^\d+$/.test(searchTerm))) {
    document.querySelector(".errMsg").innerHTML = 'Input should be a valid number between 1-5 and 8';
    return;
  }

  if ((activityType == 'price' && searchTerm.length == 0) || (activityType == 'price' && searchTerm.length > 0  && !(/^[-+]?[0-9]+\.[0-9]+$/.test(searchTerm))) && !(/^\d+$/.test(searchTerm))) {
    document.querySelector(".errMsg").innerHTML = 'Input should be a valid number 0-0.6';
    return;
  }

  if ((activityType == 'accessibility' && searchTerm.length == 0) || (activityType == 'accessibility' && searchTerm.length > 0  && !(/^[-+]?[0-9]+\.[0-9]+$/.test(searchTerm))) && !(/^\d+$/.test(searchTerm))) {
    document.querySelector(".errMsg").innerHTML = 'Input should be a valid number of 0, 1, or between 0.1-0.9';
    return;
  }

  // The complete build of the url
  const url = `${base}?${activityType}=${searchTerm}`;

  // The get method
  const option = {
    method: "GET"
  };

  // Stops the default action
  e.preventDefault();

  let resultElement = ``;

  if (`${searchTerm}` === ``) {
    // Output results
    resultElement +=
      '<p class=" errMsg text-center">Please select a type search above first!</p>';
    document.querySelector(".errMsg").innerHTML = resultElement;
  } else {
    fetch(url)
      //Parse data
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })

      // Do something with data
      .then(data => {
        // for testing purposes to have visual as to what is actually being pulled
        console.log(data);

        if (data.activity.length > 1) {
          resultElement += `
        <h3 class="text-center"><span>Results for ${searchTerm}</span></h3>
        <p class="resultInfo">Click on activity to see more details</p>
        <a href="#" id="resultElement" class="linkResult">${data.activity}</a>`;

          // To store input via local storage
          let pastSearch = document.getElementsByTagName("input")[0],
            search;

          localStorage.setItem("search", searchTerm);

          search = localStorage.getItem("search");

          pastSearch.innerHTML = search;
        } else {
          resultElement += '<p class="no-results">No results</p>';
        }

        document.querySelector(".js-search-results").innerHTML = resultElement;

        const link = document.getElementById("resultElement");

        link.addEventListener("click", function(event) {
          modal.style.display = "block";
          let resultDetails = ``;
          resultDetails += `<div class="container text-center">
                        <img src="img/do.jpg" class="detailImg" alt="Details Logo"/>
                        <p class="details">Activity: ${data.activity}</p>
                        <p class="details">Accessibility: ${
                          data.accessibility
                        }</p>
                        <p class="details">Type: ${data.type}</p>
                        <p class="details">Participants: ${
                          data.participants
                        }</p>
                        <p class="details">Price: $${data.price}</p>
                        <div>`;

          document.querySelector(".text").innerHTML = resultDetails;
        });

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function(event) {
          modal.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        });
      })

      .catch(err => {
        console.log(err);
        // Output results
        let resultError = '';

        resultError = '<p class="text-center errMsg">Sorry no results! Try again!</p>';

        document.querySelector(".errMsg").innerHTML = resultError;
      });
  }
});

/*********** ----- ENTER MAIN PAGE EVENT ----- **********/
enter.addEventListener("click", toggle, false);

function toggle() {
  const isHidden = document.getElementById("hideMe");
  isHidden.style.display = "none";
  const isShow = document.getElementById("showMe");
  isShow.style.display = "block";
}
