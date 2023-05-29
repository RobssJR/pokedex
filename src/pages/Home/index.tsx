import './style.css';

import { useState, useEffect } from 'react';
import { PokemonModel } from '../../Core/Models/PokemonModel';
import { PokemonService } from '../../Core/Services/PokemonService/PokemonService';
import PokeCard from '../../components/PokemonCard';

export const Home = () => {
  let pokemonService = new PokemonService()

  const [pokemonListValue, setPokemonList] = useState<Array<PokemonModel>>();

  useEffect(() => {
    async function fetchPokemon() {
      let pokemon = await pokemonService.GetPokemonByRange(0, 151);

      if (pokemon != null) {
        setPokemonList(pokemon);
      }
    }

    fetchPokemon();
  });

  return (
    <div className="App">
      <section className='container'>
        <div className='pokemon-list'>
          {pokemonListValue && pokemonListValue.length > 0 && (
            pokemonListValue.map(pokemon => (
              <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

