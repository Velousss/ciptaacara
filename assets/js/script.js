let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle('active');
}

const locations = [
  "Alfie Pratama",
  "Rizki Aditya",
  "Fitriani Putri",
  "Aulia Ramadhan",
  "Dian Saputra",
  "Hendra Gunawan",
  "Siti Nuraini",
  "Bayu Santoso",
  "Indah Lestari",
  "Andi Prakoso",
  "Rina Wulandari",
  "Adi Suryanto",
  "Wahyu Firmansyah",
  "Maya Kusuma",
  "Eka Widodo",
  "Lia Anggraini",
  "Fajar Mahendra",
  "Tari Oktaviani",
  "Niko Hardiansyah",
  "Dewi Susanti"
];


// suggestion box
function showSuggestions(value) {
  const suggestions = document.querySelector('.suggestions');
  suggestions.innerHTML = '';

  if (value) {
    fetch('/assets/json/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(results => {
        const filteredResults = results.filter(result => result.name && result.name.toLowerCase().includes(value.toLowerCase()));

        filteredResults.forEach(result => {
          const div = document.createElement('div');
          div.textContent = result.name;
          div.onclick = () => {
            document.querySelector('.search').value = result.name;
            suggestions.innerHTML = '';
            suggestions.style.display = 'none'; 
          };
          suggestions.appendChild(div);
        });

        suggestions.style.display = filteredResults.length ? 'block' : 'none'; 
      })
      .catch(error => {
        console.error('Error fetching the results:', error);
        suggestions.style.display = 'none'; 
      });
  } else {
    suggestions.style.display = 'none'; 
  }
}

// result
document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.endsWith('result.html')) {
      const urlParams = new URLSearchParams(window.location.search);
      const query = urlParams.get('query') || '';

      fetch('/assets/json/data.json')
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(results => {
              const resultContainer = document.querySelector('.featured_listing');

              console.log(results.name)
              resultContainer.innerHTML = '';

              const matchingResults = results.filter(result => result.name && result.name.toLowerCase().includes(query.toLowerCase()));

              if (!query.trim()) {
                  resultContainer.innerHTML = `
                      <h1>Search Result</h1>
                      <p>Please enter a search query.</p>
                  `;
              } else if (matchingResults.length === 0) {
                  resultContainer.innerHTML = `
                      <h1>Search Result</h1>
                      <p>Sorry, your search for "${query}" did not match any results.</p>
                  `;
              } else {
                  resultContainer.innerHTML = `
                      <h1>Search Result</h1>
                      <div class="row custom-row"></div>
                  `;
                  let rowDiv = document.querySelector('.custom-row');
                  matchingResults.forEach(matchingResult => {
                      const cardDiv = document.createElement('div');
                      cardDiv.classList.add('card', 'custom-card');
                      cardDiv.innerHTML = `
                          <div class="featured_listing_card">
                              <div class="featured_listing_card_info">
                                  <img src="${matchingResult.image}">
                                  <div class="property_title">
                                      <a>${matchingResult.name}</a>
                                  </div>
                                  <p>${matchingResult.region}</p>
                                  <hr>
                                  <p>${matchingResult.skills}</p>
                                  <hr>
                                  <p>${matchingResult.qualifications}</p>
                                  <hr>
                                  <p>${matchingResult.features}</p>
                                  <hr>
                                  <p>${matchingResult.rating}</p>
                              </div>
                          </div>
                      `;
                      rowDiv.appendChild(cardDiv);
                  });
              }
          })
          .catch(error => {
              console.error('Error fetching the results:', error);
              const resultContainer = document.querySelector('.featured_listing');
              resultContainer.innerHTML = `
                  <h1>Search Result</h1>
                  <p>Sorry, there was an error fetching the results. Please try again later.</p>
              `;
          });
  }
});
