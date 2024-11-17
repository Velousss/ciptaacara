fetch('/assets/json/data.json')
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => {
    const topThree = data.slice(0, 3);
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      topThree.forEach(location => {
        const markup = `
          <div class="featured_listing_card">
            <div class="featured_listing_card_info">
              <img src="${location.image}" alt="${location.name}">
              <div class="property_title">
                <a>${location.name}</a>
              </div>
              <p>${location.types}</p>
              <hr>
              <p>${location.area}</p>
              <hr>
              <p>${location.facilities}</p>
              <hr>
              <p>${location.others}</p>
              <hr>
              <p>${location.date}</p>
            </div>
          </div>`;
        card.insertAdjacentHTML('beforeend', markup);
      });
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
