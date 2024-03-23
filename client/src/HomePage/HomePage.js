import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortBy, setSortBy] = useState(''); 

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100') 
      .then(response => response.json())
      .then(data => {
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      })
      .catch(error => console.error('Error fetching pokemons:', error));
  }, []);

  const handleSearch = () => {
    const filtered = pokemons.filter(pokemon => pokemon.name.includes(searchTerm.toLowerCase()));
    setFilteredPokemons(filtered);
  };

  const handleTypeChange = async (type) => {
    setSelectedType(type);
    if (type === '') {
      setFilteredPokemons(pokemons);
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();
      const pokemonNames = data.pokemon.map(p => p.pokemon.name);
      const filtered = pokemons.filter(pokemon => pokemonNames.includes(pokemon.name));
      setFilteredPokemons(filtered);
    } catch (error) {
      console.error('Error fetching pokemon by type:', error);
    }
  };

  const handleSortBy = (criteria) => {
    setSortBy(criteria);
    const sortedPokemons = [...filteredPokemons];
    if (criteria === 'alphabetical') {
      sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'attack') {
      sortedPokemons.sort((a, b) => a.base_stat - b.base_stat);
    }
    setFilteredPokemons(sortedPokemons);
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

      <div>
        <select value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
          <option value="">Todos los tipos</option>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="rock">Roca</option>
          <option value="electric">Electrico</option>
          <option value="grass">Planta</option>
          <option value="ice">Hielo</option>
          <option value="bug">Bicho</option>
    
        </select>
      </div>

      <div>
        <button onClick={() => handleSortBy('alphabetical')}>Ordenar alfabéticamente</button>
        <button onClick={() => handleSortBy('attack')}>Ordenar por ataque</button>
      </div>

      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
