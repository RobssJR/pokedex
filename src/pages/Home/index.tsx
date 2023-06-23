import './style.css';

import { useState, useEffect } from 'react';
import { PokemonModel } from '../../Core/Models/PokemonModel';
import { PokemonService } from '../../Core/Services/PokemonService/PokemonService';
import PokeCard from '../../components/PokemonCard';
import TextBox from '../../components/TextBox';

var pokemonService = new PokemonService()

export const Home = () => {
  const [searchInputValue, setSearchInput] = useState<string>("");
  const [allPokemon, setAllPokemon] = useState<Array<PokemonModel>>([]);
  const [pokemonFilterValue, setPokemonFilter] = useState<Array<PokemonModel>>(
    []
  );

  useEffect(() => {
    async function fetchPokemon() {
      if (allPokemon.length > 0) {
        return;
      }

      let pokemon = await pokemonService.GetPokemonByRange(0, 1024);

      if (pokemon == null) {
        return;
      }

      setAllPokemon(pokemon);
      setPokemonFilter(pokemon);
    }

    fetchPokemon();
  }, [allPokemon]);

  function ChangePokemon(e: string) {
    setSearchInput(e);

    if (e === "") {
      setPokemonFilter(allPokemon);
      return;
    }

    const listFiltro = allPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.toLowerCase())
    );

    setPokemonFilter(listFiltro);
  }

  return (
    <div className="App">
      <TextBox
        type="text"
        value={searchInputValue}
        placeholder='Pokemon'
        onChange={(e) => ChangePokemon(e.target.value)}
      />

      <section className="container">
        <div className="pokemon-list">
          {pokemonFilterValue.length > 0 &&
            pokemonFilterValue.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
      </section>
    </div>
  );
};