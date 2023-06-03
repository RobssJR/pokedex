import { CustomConstants } from "../../Constants/CustomConstants";
import { BaseService } from "../../Interface/Service/BaseService";
import { IPokemonService } from "../../Interface/Service/IPokemonService";
import { PokemonListModel } from "../../Models/PokemonListModel";
import { PokemonModel } from "../../Models/PokemonModel";
import { RequestService } from "../RequestService";

export class PokemonService extends BaseService implements IPokemonService {

    public async GetPokemonByRange(min: number, max: number): Promise<Array<PokemonModel> | null> {
        let simplePokemons = await RequestService.Request<PokemonListModel>(CustomConstants.pokeApi + `?limit=${max}&offset=${min}`)
        let fullPokemonList: Array<PokemonModel> = new Array<PokemonModel>();
        
        if (simplePokemons?.results) {
            await Promise.all(
              simplePokemons.results.map(async (pokemon) => {
                const pokemonResult = await this.GetByUrl<PokemonModel>(pokemon.url);

                if (pokemonResult != null) {
                  fullPokemonList.push(pokemonResult);
                }

              })
            );
        }

        fullPokemonList = fullPokemonList.sort((p1, p2) => {
            if (p1.id > p2.id) { return 1; }
            if (p1.id < p2.id) { return -1; }
            return 0;
        });

        return fullPokemonList;
    }

    public async GetPokemonByName(name: string): Promise<PokemonModel | null> {
        return RequestService.Request<PokemonModel>(CustomConstants.pokeApi + "/" + name);
    }

    public async GetPokemonById(id: number): Promise<PokemonModel | null> {
        return RequestService.Request<PokemonModel>(CustomConstants.pokeApi + "/" + id);
    }
}
