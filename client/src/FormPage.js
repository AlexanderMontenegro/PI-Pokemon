import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    life: '',
    attack: '',
    defense: '',
    speed: '',
    height: '',
    weight: '',
    types: [],
  });

  const handleChange = (e) => {
    if (e.target.name === 'types') {
      const selectedTypes = Array.from(e.target.selectedOptions, option => option.value);
      setFormData({ ...formData, [e.target.name]: selectedTypes });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.image.trim()) {
      alert('Por favor, ingresa un nombre y una imagen para el Pokémon.');
      return;
    } 

    if (formData.types.length === 0) {
      alert('Por favor, selecciona al menos un tipo de Pokémon.');
      return;
    }

    const numFields = ['life', 'attack', 'defense', 'speed', 'height', 'weight'];
    for (const field of numFields) {
      if (formData[field] !== '' && isNaN(Number(formData[field]))) {
        alert(`El valor de ${field} debe ser un número válido.`);
        return;
      }
    }

    console.log(formData);
  };

  return (
    <div>
      <h2>Crear Nuevo Pokémon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} />

        <label htmlFor="types">Tipos:</label>
        <select multiple id="types" name="types" value={formData.types} onChange={handleChange}>
          <option value="fire">Fuego</option>
          <option value="water">Agua</option>
          <option value="grass">Planta</option>
          <option value="electric">Eléctrico</option>
          <option value="fighting">Lucha</option>
          <option value="poison">Veneno</option>
          <option value="flying">Volador</option>
          <option value="psychic">Psíquico</option>
          <option value="bug">Bicho</option>
          <option value="rock">Roca</option>
          <option value="ghost">Fantasma</option>
</select>


        <button type="submit">Crear Pokémon</button>
      </form>
    </div>
  );
};

export default FormPage;
