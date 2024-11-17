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
          <p>${location.region}</p>
          <hr>
          <p>${location.skills}</p>
          <hr>
          <p>${location.qualifications}</p>
          <hr>
          <p>${location.features}</p>
          <hr>
          <p>${location.rating}</p>
        </div>
      </div>`;
    document.querySelector('.card').insertAdjacentHTML('beforeend', markup);
  });
})
.catch(error => {
  console.error('Error fetching JSON data:', error);
});