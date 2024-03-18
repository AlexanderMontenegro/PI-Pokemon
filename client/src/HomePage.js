import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './redux/actions'; 
import PokemonCard from './PokemonCard'; 

function HomePage() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(fetchPokemons(searchTerm));
  };

  return (
    <div className="home-page">
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <div className="pokemon-list">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
