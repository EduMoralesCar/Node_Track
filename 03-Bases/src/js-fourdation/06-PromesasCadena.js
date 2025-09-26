
const getPokemonById = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return fetch(url)
        .then(response => response.json())
        .then(data => data.name)
        .catch(error => console.error('Error fetching Pokémon data:', error));
};

module.exports = getPokemonById;