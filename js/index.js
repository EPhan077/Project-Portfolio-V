const searchType = document.querySelector('.type');
const searchParticipants = document.querySelector('.participants');
const search = document.getElementsByTagName('a');


searchType.addEventListener("click", function(event) {
    event.preventDefault();

      console.log('grrrr');
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
      //const url = `${base}?${searchParticipants}=${searchTerm}`;
      //const url = `${base}?${searchCost}=${searchTerm}`;
      //const url = `${base}?${searchAccessibility}=${searchTerm}`;


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

              console.log(data)
              for(var i = 0; i < data.activity.length; i++){
                console.log(data.activity);
              }
        // Output results
        let resultElement = '';

            if(data.activity.length > 1) {

                resultElement += `
                                <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                <section class="js-search-results container-fluid text-center">
                                `;
                resultElement += `<a href="#">${data.activity}</a>`;
                resultElement += `</section>`;

        // To store input via local storage
        var pastSearch = document.getElementsByTagName('input') [0], search;

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


  searchParticipants.addEventListener("click", function(event) {
    event.preventDefault();

      console.log('geeee');
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

      //const url = `${base}?${searchType}=${searchTerm}`;
      const url = `${base}?${criteria}=${searchTerm}`;
      //const url = `${base}?${searchCost}=${searchTerm}`;
      //const url = `${base}?${searchAccessibility}=${searchTerm}`;


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

              console.log(data)


        // Output results
        let resultElement = '';

            if(data.activity.length > 1) {

                resultElement += `
                                <h2 class="text-center"><span>Results for ${searchTerm}</span></h2>
                                <section class="js-search-results container-fluid text-center">
                                `;
                resultElement += `<a href="#">${data.activity}</a>`;
                resultElement += `</section>`;

        // To store input via local storage
        var pastSearch = document.getElementsByTagName('input') [0], search;

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
