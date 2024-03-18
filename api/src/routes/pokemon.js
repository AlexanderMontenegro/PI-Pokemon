const { Router } = require('express');
const router = Router();
const pokemonController = require('../controllers/pokemon.controllers');


router.get('/name', pokemonController.getPokemonByName);

router.get('/types', pokemonController.getAllTypes);

router.get('/', pokemonController.getAllPokemons);

router.get('/:idPokemon', pokemonController.getPokemonById);

router.post('/', pokemonController.createPokemon);

module.exports = router;
