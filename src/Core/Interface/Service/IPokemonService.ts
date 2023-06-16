import { EvolutionChain } from "../../Models/EvolutionChain";
import { PokemonModel } from "../../Models/PokemonModel";
import { PokemonSpecie } from "../../Models/PokemonSpecie";

export interface IPokemonService {
    GetPokemonByName(name: string) : Promise<PokemonModel | null>;
    GetPokemonById(id: number) : Promise<PokemonModel | null>;
    GetPokemonByRange(min: number, max: number) : Promise<Array<PokemonModel> | null>
    GetPokemonSpecie(idPokemon: number) : Promise<PokemonSpecie | null>
    GetPokemonEvolutionChain(idSpecie: number) : Promise<EvolutionChain | null>
}