import './style.css';

import { useState, useEffect } from 'react';
import { PokemonModel } from '../../Core/Models/PokemonModel';
import { PokemonService } from '../../Core/Services/PokemonService/PokemonService';
import PokeCard from '../../components/PokemonCard';
import TextBox from '../../components/TextBox';

var pokemonService = new PokemonService()

export const Home = () => {
  const [searchInputValue, setSearchInput] = useState<string>("");
  const [todosPokemons, setTodosPokemons] = useState<Array<PokemonModel>>([]);
  const [pokemonFiltroValue, setPokemonFiltro] = useState<Array<PokemonModel>>(
    []
  );

  useEffect(() => {
    async function fetchPokemon() {
      if (todosPokemons.length > 0) {
        return;
      }

      let pokemon = await pokemonService.GetPokemonByRange(0, 1024);

      if (pokemon == null) {
        return;
      }

      setTodosPokemons(pokemon);
      setPokemonFiltro(pokemon);
    }

    fetchPokemon();
  }, [todosPokemons]);

  function AlterarPokemons(e: string) {
    setSearchInput(e);

    if (e === "") {
      setPokemonFiltro(todosPokemons);
      return;
    }

    const listFiltro = todosPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(e.toLowerCase())
    );

    setPokemonFiltro(listFiltro);
  }

  return (
    <div className="App">
      <TextBox
        type="text"
        value={searchInputValue}
        onChange={(e) => AlterarPokemons(e.target.value)}
      />

      <section className="container">
        <div className="pokemon-list">
          {pokemonFiltroValue.length > 0 &&
            pokemonFiltroValue.map((pokemon) => (
              <PokeCard pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>
      </section>
    </div>
  );
};