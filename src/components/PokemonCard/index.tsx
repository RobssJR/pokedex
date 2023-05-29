import './style.css';
import { PokemonModel } from '../../Core/Models/PokemonModel';
import PokemonType from '../PokemonType';
import { StringFunctions } from '../../Core/Util/StringFunctions';

interface props {
  pokemon: PokemonModel;
}

export default function PokeCard({ pokemon }: props) {
  return (
    <div className='container-pokecard'>
      <div className='image-container'>
        <p>#{pokemon.id.toString().padStart(4, '0')}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      </div>
      <div className='pokecard'>
        <div className='pokemon-desc-container'>
          <h2>{StringFunctions.Capitalize(pokemon.name)}</h2>
          <div className='pokemon-type-container'>
            {pokemon.types.map((type) => {
              return (<PokemonType type={type.type} key={type.slot + pokemon.id} />);
            })}
          </div>
        </div>
      </div>
    </div>

  )
}
