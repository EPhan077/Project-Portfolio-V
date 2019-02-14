const searchType = document.querySelector('.type');
const searchParticipants = document.querySelector('.participants');
const searchPrice = document.querySelector('.price');
const searchAccessibility = document.querySelector('.accessibility');
//To change nav color of active link
const linkAcc = document.getElementById('linkAcc');
const linkPrice = document.getElementById('linkPrice');
const linkType = document.getElementById('linkType');
const linkPart = document.getElementById('linkPart');

// To set the event to listen to
const form = document.querySelector('.js-search-form');

//  Start of the query string
const base = `https://www.boredapi.com/api/activity`;

// Modal view to get more details
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close') [0];


/*********** ----- TYPE SEARCH TYPE EVENT ----- **********/
searchType.addEventListener("click", function(event) {
    event.preventDefault();

    linkAcc.style.color = "#FFF";
    linkPrice.style.color = "#FFF";
    linkType.style.color = "#F18F01";
    linkPart.style.color = "#FFF";

    document.querySelector('.js-search-form').reset();
    document.querySelector('.js-search-results').innerHTML = ``;

    // To set search type details
    let searchInfo = '';
    searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified type (educational, recreational, music, social, diy, cooking)</p>`;
    document.querySelector('.searchInfo').innerHTML = searchInfo;

    // To listen when user hits submit or press enter
    form.addEventListener('submit', (e) => {

    // Extension of the query string
    let searchTerm = document.querySelector('#searchTerm').value;

    // Assign the type of search
    let criteria = `type`;

    // The complete build of the url
    const url = `${base}?${criteria}=${searchTerm}`;

    // The get method
    const option = {
      method: 'GET'
    }

    // Stops the default action
    e.preventDefault()

    let resultElement = '';

    if(searchTerm === ``) {

      // Output results
      resultElement += '<p class="text-center">Please do not leave blank!</p>';
      document.querySelector('.js-search-results').innerHTML = resultElement;
    }

    else {
      fetch(url)

      //Parse data
      .then( response => {

        if (response.ok) {
          return response.json()
        }

        else {
          throw response
        }

      })

      // Do something with data
      .then( data => {

        if(data.activity.length > 1) {

          resultElement += `
            <section class="results js-search-results container-fluid text-center">
            <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
            <a href="#" id="resultElement">${data.activity}</a>
            </section>`;

          // To store input via local storage
          let pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;
        }

        else {
          resultElement += '<p class="no-results">No results</p>';
        }

        document.querySelector('.js-search-results').innerHTML = resultElement;

        const link = document.getElementById('resultElement');

        link.addEventListener("click", function(event) {
          modal.style.display = 'block';
          let resultDetails = ``;
          resultDetails += `<div class="container text-center">
                            <img src="../img/do.jpg" alt="Details Logo"/>
                            <p class="details">Activity: ${data.activity}</p>
                            <p class="details">Accessibility: ${data.accessibility}</p>
                            <p class="details">Type: ${data.type}</p>
                            <p class="details">Participants: ${data.participants}</p>
                            <p class="details">Price: $${data.price}</p>
                            <div>`;

          document.querySelector('.text').innerHTML = resultDetails;
        })

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function(event) {
          modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        })

      })

      .catch(err => {
        console.log(err)
        // Output results
        let resultError = '<p class="text-center">Please type text only!</p>';
        document.querySelector('.js-search-results').innerHTML = resultError;
      })
    }
  })
})

/*********** ----- PARTICIPANTS SEARCH TYPE EVENT ----- **********/
searchParticipants.addEventListener("click", function(event) {
    event.preventDefault();

    linkAcc.style.color = "#FFF";
    linkPrice.style.color = "#FFF";
    linkType.style.color = "#FFF";
    linkPart.style.color = "#F18F01";

    document.querySelector('.js-search-form').reset();
    document.querySelector('.js-search-results').innerHTML = ``;

    // To set search type details
    let searchInfo = '';
    searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified number of participants</p>`;
    document.querySelector('.searchInfo').innerHTML = searchInfo;

    // To listen when user hits submit or press enter
    form.addEventListener('submit', (e) => {

    // Extension of the query string
    let searchTerm = document.querySelector('#searchTerm').value;

    // Assign the type of search
    let criteria = `participants`;

    // The complete build of the url
    const url = `${base}?${criteria}=${searchTerm}`;

    // The get method
    const option = {
      method: 'GET'
    }

    // Stops the default action
    e.preventDefault()

    let resultElement = '';

    if(searchTerm === ``) {

      // Output results
      resultElement += '<p class="text-center">Please do not leave blank!</p>';
      document.querySelector('.js-search-results').innerHTML = resultElement;
    }

    else {
      fetch(url)

      //Parse data
      .then( response => {

        if (response.ok) {
          return response.json()
        }

        else {
          throw response
        }

      })

      // Do something with data
      .then( data => {

        if(data.activity.length > 1) {

          resultElement += `
            <section class="results js-search-results container-fluid text-center">
            <h2 class="text-center"><span>Results for ${searchTerm} Participants</span></h2>
            <a href="#" id="resultElement">${data.activity}</a>
            </section>`;

          // To store input via local storage
          let pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;
        }

        else {
          resultElement += '<p class="text-center">No results</p>';
        }

        document.querySelector('.js-search-results').innerHTML = resultElement;

        const link = document.getElementById('resultElement');

        link.addEventListener("click", function(event) {
          modal.style.display = 'block';
          let resultDetails = ``;
          resultDetails += `<div class="container text-center">
                            <img src="../img/do.jpg" alt="Details Logo"/>
                            <p class="details">Activity: ${data.activity}</p>
                            <p class="details">Accessibility: ${data.accessibility}</p>
                            <p class="details">Type: ${data.type}</p>
                            <p class="details">Participants: ${data.participants}</p>
                            <p class="details">Price: $${data.price}</p>
                            <div>`;

          document.querySelector('.text').innerHTML = resultDetails;
        })

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function(event) {
          modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        })

      })

      .catch(err => {
        console.log(err);

        // Output results
        let resultError = '<p class="text-center">Please type numbers only!</p>';
        document.querySelector('.js-search-results').innerHTML = resultError;
      })
    }
  })
})


/*********** ----- COST SEARCH TYPE EVENT ----- **********/
searchPrice.addEventListener("click", function(event) {
    event.preventDefault();

    linkAcc.style.color = "#FFF";
    linkPrice.style.color = "#F18F01"
    linkType.style.color = "#FFF";
    linkPart.style.color = "#FFF";

    // To clear previous search
    document.querySelector('.js-search-form').reset();
    document.querySelector('.js-search-results').innerHTML = ``;

    // To set search type details
    let searchInfo = '';
    searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified price (range 0 - 0.6)</p>`;
    document.querySelector('.searchInfo').innerHTML = searchInfo;

    // To listen when user hits submit or press enter
    form.addEventListener('submit', (e) => {

    // Extension of the query string
    let searchTerm = document.querySelector('#searchTerm').value;

    // Assign the type of search
    let criteria = `price`;

    // The complete build of the url
    const url = `${base}?${criteria}=${searchTerm}`;

    // The get method
    const option = {
      method: 'GET'
    }

    // Stops the default action
    e.preventDefault()

    let resultElement = '';

    if(searchTerm === ``) {

      // Output results
      resultElement += '<p class="text-center">Please do not leave blank!</p>';
      document.querySelector('.js-search-results').innerHTML = resultElement;
    }

    else {
      fetch(url)

      //Parse data
      .then( response => {

        if (response.ok) {
          return response.json()
        }

        else {
          throw response
        }

      })

      // Do something with data
      .then( data => {

        if(data.activity.length > 1) {

          resultElement += `
            <section class="results js-search-results container-fluid text-center">
            <h2 class="text-center"><span>Result with a price of : $${searchTerm}</span></h2>
            <a href="#" id="resultElement">${data.activity}</a>
            </section>`;

          // To store input via local storage
          let pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;
        }

        else {
          resultElement += '<p class="text-center">No results</p>';
        }

        document.querySelector('.js-search-results').innerHTML = resultElement;

        const link = document.getElementById('resultElement');

        link.addEventListener("click", function(event) {
          modal.style.display = 'block';
          let resultDetails = ``;
          resultDetails += `<div class="container text-center">
                            <img src="../img/do.jpg" alt="Details Logo"/>
                            <p class="details">Activity: ${data.activity}</p>
                            <p class="details">Accessibility: ${data.accessibility}</p>
                            <p class="details">Type: ${data.type}</p>
                            <p class="details">Participants: ${data.participants}</p>
                            <p class="details">Price: $${data.price}</p>
                            <div>`;

          document.querySelector('.text').innerHTML = resultDetails;
        })

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function(event) {
          modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
        })

      })

      .catch(err => {
        console.log(err)

        // Output results
        let resultError = '<p class="text-center">Please type within this range 0 - 0.6!</p>';
        document.querySelector('.js-search-results').innerHTML = resultError;
      })
    }
  })
})

/*********** ----- ACCESSIBILITY SEARCH TYPE EVENT ----- **********/
searchAccessibility.addEventListener("click", function(event) {
    event.preventDefault();

    linkAcc.style.color = "#F18F01";
    linkPrice.style.color = "#FFF";
    linkType.style.color = "#FFF";
    linkPart.style.color = "#FFF";

    // To clear previous search
    document.querySelector('.js-search-form').reset();
    document.querySelector('.js-search-results').innerHTML = ``;

    // To set search type details
    let searchInfo = '';
    searchInfo += `<p class="searchInfo text-center">Find a random activity with a specified accessibility: 1 being not easily accessible and 0 being the most accessible</p>`;
    document.querySelector('.searchInfo').innerHTML = searchInfo;

    // To listen when user hits submit or press enter
    form.addEventListener('submit', (e) => {

    // Extension of the query string
    let searchTerm = document.querySelector('#searchTerm').value;

    // Assign the type of search
    let criteria = `accessibility`;

    // The complete build of the url
    const url = `${base}?${criteria}=${searchTerm}`;

    // The get method
    const option = {
      method: 'GET'
    }

    // Stops the default action
    e.preventDefault()

    let resultElement = '';

    if(searchTerm === ``) {

      // Output results
      resultElement += '<p class="text-center">Please do not leave blank!</p>';
      document.querySelector('.js-search-results').innerHTML = resultElement;
    }

    else {
      fetch(url)

      //Parse data
      .then( response => {

        if (response.ok) {
          return response.json()
        }

        else {
          throw response
        }

      })

      // Do something with data
      .then( data => {

        if(data.activity.length > 1) {

          resultElement += `
            <section class="results js-search-results container-fluid text-center">
            <h2 class="text-center"><span>Results for Accessibility of: ${searchTerm}</span></h2>
            <a href="#" id="resultElement">${data.activity}</a>
            </section>`;

          // To store input via local storage
          let pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;
        }

        else {
          resultElement += '<p class="text-center">No results</p>';
        }

        document.querySelector('.js-search-results').innerHTML = resultElement;

        const link = document.getElementById('resultElement');

        link.addEventListener("click", function(event) {
          modal.style.display = 'block';
          let resultDetails = ``;
          resultDetails += `<div class="container text-center">
                            <img src="../img/do.jpg" alt="Details Logo"/>
                            <p class="details">Activity: ${data.activity}</p>
                            <p class="details">Accessibility: ${data.accessibility}</p>
                            <p class="details">Type: ${data.type}</p>
                            <p class="details">Participants: ${data.participants}</p>
                            <p class="details">Price: $${data.price}</p>
                            <div>`;

          document.querySelector('.text').innerHTML = resultDetails;
        })

        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", function(event) {
          modal.style.display = "none";
        })

        // When the user clicks anywhere outside of the modal, close it
        window.addEventListener("click", function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        })

      })

      .catch(err => {
        console.log(err)

        // Output results
        let resultError = '<p class="text-center">Please type 0 or 1 only!</p>';
        document.querySelector('.js-search-results').innerHTML = resultError;
      })
    }
  })
})
