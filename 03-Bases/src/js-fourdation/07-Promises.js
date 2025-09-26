const {http} = require('../plugins');

const getPokemonByid = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const data = await http.get(url);
    return data.name;
}

module.exports = getPokemonByid;
