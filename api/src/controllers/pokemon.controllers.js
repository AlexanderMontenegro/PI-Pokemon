const { Pokemon } = require('../db.js');


// todos los pokemones//
async function getAllPokemons(req, res, next) {
    try {
      const pokemons = await Pokemon.findAll();
      res.json(pokemons);
    } catch (error) {
      next(error);
    }
  }

  //por nombre//
  async function getPokemonByName(req, res, next) {
    const { name } = req.query;
    try {
      const pokemon = await Pokemon.findOne({ where: { name } });
      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon no encontrado" });
      }
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
  
  // tipos de pokemon//
  async function getAllTypes(req, res, next) {
    try {
      const types = await Pokemon.findAll({ attributes: ['type1', 'type2'] });
      const allTypes = new Set();
      types.forEach(pokemon => {
        if (pokemon.type1) allTypes.add(pokemon.type1);
        if (pokemon.type2) allTypes.add(pokemon.type2);
      });
      res.json(Array.from(allTypes));
    } catch (error) {
      next(error);
    }
  }
  // pokemon por su ID//
  async function getPokemonById(req, res, next) {
    const { idPokemon } = req.params;
    try {
      const pokemon = await Pokemon.findByPk(idPokemon);
      if (!pokemon) {
        return res.status(404).json({ message: "Pokemon No Encontrado" });
      }
      res.json(pokemon);
    } catch (error) {
      next(error);
    }
  }
  
  // crear un nuevo pokemon//
  async function createPokemon(req, res, next) {
    const { name, life, attack, defense, speed, height, weight } = req.body;
    try {
      const newPokemon = await Pokemon.create({
        name,
        life,
        attack,
        defense,
        speed,
        height,
        weight
      });
      res.status(201).json(newPokemon);
    } catch (error) {
      next(error);
    }
  }
  

  module.exports = {
  getAllPokemons,
  getPokemonById,
  createPokemon,
  getPokemonByName,
  getAllTypes
  };