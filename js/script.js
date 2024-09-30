// TRM API
document.getElementById('fetchTRM').addEventListener('click', function() {
    const date = document.getElementById('trmDate').value;
    if (date) {
        fetch(`https://trm-colombia.vercel.app/?date=${date}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Esto te mostrará qué datos devuelve la API
                if (data && data.value) {
                    document.getElementById('trmResult').innerText = `La TRM para el ${date} es: ${data.value}`;
                } else {
                    document.getElementById('trmResult').innerText = 'Error: No se pudo obtener la TRM.';
                }
            })
            .catch(error => console.error('Error al obtener la TRM:', error));
    } else {
        alert('Por favor selecciona una fecha.');
    }
});


// API del Clima (ejemplo usando Weatherstack)
document.getElementById('fetchWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY';  // Asegúrate de reemplazar 'YOUR_API_KEY' con tu clave válida

    if (city) {
        fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);  // Esto te ayudará a ver si la API devuelve un error
                if (data.success === false) {
                    document.getElementById('weatherResult').innerText = 'Error: no se pudo obtener el clima.';
                } else {
                    document.getElementById('weatherResult').innerText = `El clima en ${city}: ${data.current.temperature}°C, ${data.current.weather_descriptions[0]}`;
                }
            })
            .catch(error => console.error('Error al obtener el clima:', error));
    } else {
        alert('Por favor escribe una ciudad.');
    }
});


// Rick and Morty API
document.getElementById('fetchRickMorty').addEventListener('click', function() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            let characters = data.results.map(character => character.name).join(', ');
            document.getElementById('rickMortyResult').innerText = `Personajes: ${characters}`;
        })
        .catch(error => console.error('Error al obtener personajes de Rick and Morty:', error));
});
