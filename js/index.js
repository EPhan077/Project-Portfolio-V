const searchType = document.querySelector('.type');
const searchParticipants = document.querySelector('.participants');
const searchCost = document.querySelector('.cost');
const searchAccessibility = document.querySelector('.accessibility');


/* --- Type Search Event -- */
searchType.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector('.js-search-form').reset();

    // To set search type details
    const searchDetails = '';
    searchDetails += `<p class="text-center">Find a random activity with a specified type (educational, recreational, music, social, diy, cooking)</p>`;
    document.querySelector('.details').innerHTML = searchDetails;

      // To set the event to listen to
      const form = document.querySelector('.js-search-form');

      // To listen when user hits submit or press enter
      form.addEventListener('submit', (e) => {


      //  Start of the query string
      const base = `https://www.boredapi.com/api/activity`;


      // Extension of the query string
      const searchTerm = document.querySelector('#searchTerm').value;
      const criteria = `type`;

      // The complete build of the url
      const url = `${base}?${criteria}=${searchTerm}`;


      // The get method
      const option = {
          method: 'GET'
      }
        // Stops the default action
        e.preventDefault()

          fetch(url)

            //Parse data
            .then( response => {
              if (response.ok) {
                  return response.json()
              } else {
                  throw response
              }
          })

           // Do something with data
            .then( data => {

              console.log(data);

        // Output results
        const resultElement = '';

            if(data.activity.length > 1) {

                resultElement += `
                                <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                <section class="js-search-results container-fluid text-center">
                                `;
                resultElement += `<a href="#">${data.activity}</a>`;
                resultElement += `</section>`;

        // To store input via local storage
        const pastSearch = document.getElementsByTagName('input') [0], search;

        localStorage.setItem('search', searchTerm);

        search = localStorage.getItem('search');

        pastSearch.innerHTML = search;

        console.log(search);

            } else {
                resultElement += '<p class="no-results">No results</p>';
            }

            document.querySelector('.js-search-results').innerHTML = resultElement;
        })

            .catch(err => {
            console.log(e)
          })

      })

  })

/* --- Participants Search Event -- */
searchParticipants.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector('.js-search-form').reset();

    // To set search type details
    const searchDetails = '';
    searchDetails += `<p class="text-center">Find a random activity with a specified number of participants</p>`;
    document.querySelector('.details').innerHTML = searchDetails;

      // To set the event to listen to
      const form = document.querySelector('.js-search-form');

      // To listen when user hits submit or press enter
      form.addEventListener('submit', (e) => {


      //  Start of the query string
      const base = `https://www.boredapi.com/api/activity`;


      // Extension of the query string
      const searchTerm = document.querySelector('#searchTerm').value;
      const criteria = `participants`;

      // The complete build of the url
      const url = `${base}?${criteria}=${searchTerm}`;

      // The get method
      const option = {
          method: 'GET'
      }
        // Stops the default action
        e.preventDefault()

          fetch(url)

            //Parse data
            .then( response => {
              if (response.ok) {
                  return response.json()
              } else {
                  throw response
              }
          })

           // Do something with data
            .then( data => {

              console.log(data);

        // Output constresults
        const resultElement = '';

            if(data.activity.length > 1) {

                resultElement += `
                                <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                <section class="js-search-results container-fluid text-center">
                                `;
                resultElement += `<a href="#">${data.activity}</a>`;
                resultElement += `</section>`;

        // To store input via local storage
        const pastSearch = document.getElementsByTagName('input') [0], search;

        localStorage.setItem('search', searchTerm);

        search = localStorage.getItem('search');

        pastSearch.innerHTML = search;

        console.log(search);

            } else {
                resultElement += '<p class="no-results">No results</p>';
            }

            document.querySelector('.js-search-results').innerHTML = resultElement;
        })

            .catch(err => {
            console.log(err)
          })

      })

  })

/* --- Cost Search Event -- */
searchCost.addEventListener("click", function(event) {
      event.preventDefault();

      document.querySelector('.js-search-form').reset();

      // To set search type details
      const searchDetails = '';
      searchDetails += `<p class="text-center">Find a random activity with a specified price (range 0 - 0.99)</p>`;
      document.querySelector('.details').innerHTML = searchDetails;

        // To set the event to listen to
        const form = document.querySelector('.js-search-form');

        // To listen when user hits submit or press enter
        form.addEventListener('submit', (e) => {


        //  Start of the query string
        const base = `https://www.boredapi.com/api/activity`;


        // Extension of the query string
        const searchTerm = document.querySelector('#searchTerm').value;
        const criteria = `price`;
        // The complete build of the url
        const url = `${base}?${criteria}=${searchTerm}`;



        // The get method
        const option = {
            method: 'GET'
        }
          // Stops the default action
          e.preventDefault()

            fetch(url)

              //Parse data
              .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw response
                }
            })

             // Do something with data
              .then( data => {

                console.log(data);

          // Output results
          const resultElement = '';

              if(data.activity.length > 1) {

                  resultElement += `
                                  <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                  <section class="js-search-results container-fluid text-center">
                                  `;
                  resultElement += `<a href="#">${data.activity}</a>`;
                  resultElement += `</section>`;

          // To store input via local storage
          const pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;

          console.log(search);

              } else {
                  resultElement += '<p class="no-results">No results</p>';
              }

              document.querySelector('.js-search-results').innerHTML = resultElement;
          })

              .catch(err => {
              console.log(e)
            })

        })

    })

/* --- Accessibility Search Event -- */
searchAccessibility.addEventListener("click", function(event) {
      event.preventDefault();

      document.querySelector('.js-search-form').reset();

      // To set search type details
      const searchDetails = '';
      searchDeconsttails += `<p class="text-center">Find a random activity with a specified accessibility in an inclusively contained range (zero being the most accessible)</p>`;
      document.querySelector('.details').innerHTML = searchDetails;

        // To set the event to listen to
        const form = document.querySelector('.js-search-form');

        // To listen when user hits submit or press enter
        form.addEventListener('submit', (e) => {


        //  Start of the query string
        const base = `https://www.boredapi.com/api/activity`;


        // Extension of the query string
        const searchTerm = document.querySelector('#searchTerm').value;
        const criteria = `accessibility`;

        // The complete build of the url
        const url = `${base}?${criteria}=${searchTerm}`;


        // The get method
        const option = {
            method: 'GET'
        }
          // Stops the default action
          e.preventDefault()

            fetch(url)

              //Parse data
              .then( response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw response
                }
            })

             // Do something with data
              .then( data => {

                console.log(data);
          // Output results
          const resultElement = '';

              if(data.activity.length > 1) {

                  resultElement += `
                                  <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                  <section class="js-search-results container-fluid text-center">
                                  `;
                  resultElement += `<a href="#">${data.activity}</a>`;
                  resultElement += `</section>`;

          // To store input via local storage
          const pastSearch = document.getElementsByTagName('input') [0], search;

          localStorage.setItem('search', searchTerm);

          search = localStorage.getItem('search');

          pastSearch.innerHTML = search;

          console.log(search);

              } else {
                  resultElement += '<p class="no-results">No results</p>';
              }

              document.querySelector('.js-search-results').innerHTML = resultElement;
          })

              .catch(err => {
              console.log(err)
            })

        })

    })
