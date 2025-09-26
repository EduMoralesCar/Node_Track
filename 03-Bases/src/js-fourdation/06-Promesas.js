
const getPokemonById = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        //console.log(data.name);
        callback(data.name);
    })
    .catch(error => {
        console.error('Error fetching Pokémon data:', error);
    });
};

module.exports = getPokemonById;


