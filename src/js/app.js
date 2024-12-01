//console.log(fetch("https://restcountries.com/v3.1/name/india"))

function getCountry() {
  let countryName = document.getElementById("search_bar").value;
  console.log(countryName);

  fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((res) => res.json())
    .then((data) => {

      const country = data[0];

      const htmlCard =
       `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
                <div class="card" style="width: 18rem;">
                    <img src="${country.flags.png}" class="card-img-top" alt="${country.name.common}">
                    <div class="card-body">
                        <h5 class="card-title align-content-center">${country.name.common}</h5>
                        <p class="card-text">Official Name :${country.name.official}</p>
                        <p class="card-text">Reagion :${country.region}</p>
                        <p class="card-text">Capital City :${country.capital}</p>
                        <p class="card-text">Population :${country.population}</p>
                        <a href="${country.maps.googleMaps}" class="btn btn-primary map-btn align-self-end">View On Map</a>
                    </div>
                </div>
            </div>`;
      document.getElementById("set_Card_by_Row").innerHTML += htmlCard;
    });
}

