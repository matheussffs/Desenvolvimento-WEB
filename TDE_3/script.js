function buscarPais() {
    const countryInput = document.getElementById('country-input').value;
    const apiUrl = `https://restcountries.com/v3.1/name/${countryInput}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível encontrar o país');
            }
            return response.json();
        })
        .then(data => {
            const country = data[0];
            document.getElementById('country-name').textContent = country.name.common;
            document.getElementById('country-flag').src = country.flags.png;
            document.getElementById('country-capital').textContent = country.capital ? country.capital[0] : 'N/A';
            document.getElementById('country-population').textContent = country.population ? country.population.toLocaleString() : 'N/A';
            document.getElementById('country-area').textContent = country.area ? country.area.toLocaleString() : 'N/A';
            document.getElementById('country-region').textContent = country.region ? country.region : 'N/A';
            document.getElementById('country-data').style.display = 'block';
        })
        .catch(error => {
            console.error('Houve um problema com a solicitação:', error);
            alert('Erro: País não encontrado.');
        });
}
