import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemons } from './redux/actions'; 
import PokemonCard from './PokemonCard'; 

function HomePage() {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByType, setFilterByType] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = () => {
    dispatch(fetchPokemons(searchTerm));
  };

  const handleFilterByType = (type) => {
    setFilterByType(type);
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
  };

  // Filtrar Pokémon por tipo
  const filteredPokemons = filterByType ? pokemons.filter(pokemon => pokemon.types.includes(filterByType)) : pokemons;

  // Ordenar Pokémon según el seleccionado
  const sortedPokemons = sortBy === 'alphabetical' 
    ? [...filteredPokemons].sort((a, b) => a.name.localeCompare(b.name)) 
    : sortBy === 'attack' 
    ? [...filteredPokemons].sort((a, b) => b.attack - a.attack) 
    : filteredPokemons;

  return (
    <div className="home-page">
      <input
        type="text"
        placeholder="Buscar Pokémon por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <div>
        <button onClick={() => handleFilterByType('fire')}>Fuego</button>
        <button onClick={() => handleFilterByType('water')}>Agua</button>
        <button onClick={() => handleFilterByType('grass')}>Planta</button>
        <button onClick={() => handleFilterByType('electric')}>Electrico</button>
        <button onClick={() => handleFilterByType('fighting')}>Lucha</button>
        <button onClick={() => handleFilterByType('poison')}>Veneno</button>
        <button onClick={() => handleFilterByType('flying')}>Volador</button>
        <button onClick={() => handleFilterByType('psychic')}>Psiquico</button>
        <button onClick={() => handleFilterByType('bug')}>Bicho</button>
        <button onClick={() => handleFilterByType('rock')}>Roca</button>
        <button onClick={() => handleFilterByType('ghost')}>Fantasma</button>
        <button onClick={() => handleFilterByType('')}></button>
      
      </div>
      <div>
        <button onClick={() => handleSortBy('alphabetical')}>Ordenar alfabéticamente</button>
        <button onClick={() => handleSortBy('attack')}>Ordenar por ataque</button>
      </div>
      <div className="pokemon-list">
        {sortedPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
