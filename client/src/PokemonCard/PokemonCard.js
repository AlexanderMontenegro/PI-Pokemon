import React from 'react';

function PokemonCard({ pokemon }) {
  return (
    <div className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <div className="pokemon-info">
        <p>Vida: {pokemon.hp}</p>
        <p>Ataque: {pokemon.attack}</p>
        <p>Defensa: {pokemon.defense}</p>
        <p>Tipo: {pokemon.type}</p>
      </div>
    </div>
  );
}

export default PokemonCard;
