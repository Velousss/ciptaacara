fetch('/assets/json/data.json')
.then(res => {
  return res.json();
})
.then(data => {
  data.forEach(location => {
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
    document.querySelector('.card').insertAdjacentHTML('beforeend', markup);
  });
})
.catch(error => {
  console.error('Error fetching JSON data:', error);
});