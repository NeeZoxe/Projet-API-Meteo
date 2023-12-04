// api key
const APIKEY = "850c786aef4568027bcaa5773c77ba60";

// fonction de chargement des données météo sur le fichier html 
let apiCall = function (city) {

// url api key
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr
`;

    fetch(url)
        .then((response) =>
            response.json().then((data) => {
                console.log(data);
                document.querySelector('#city').innerHTML = data.name;
                document.querySelector('#temp').innerHTML =
                "<i class='fas fa-therlileter-half'></i>" + data.main.temp + '°';
                document.querySelector('#humidity').innerHTML =
                "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
                document.querySelector('#wind').innerHTML =
                "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
            })
        )
        .catch((err) => console.log('Erreur : ' + err));
};

// Fonction pour mettre à jour les données toutes les minutes
let updateData = function () {
    let ville = document.querySelector('#inputCity').value;
    apiCall(ville);
};

// Appel initial de la fonction
updateData();

// Mise à jour toutes les minutes (60 000 millisecondes)
setInterval(updateData, 3600000);

// écouteur d'événement sur le bouton de recherche
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

// appelle par défaut au chargement de la page
apiCall('Niort');
