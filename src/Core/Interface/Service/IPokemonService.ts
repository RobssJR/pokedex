import { PokemonModel } from "../../Models/PokemonModel";

export interface IPokemonService {
    GetPokemonByName(name: string) : Promise<PokemonModel | null>;
    GetPokemonById(id: number) : Promise<PokemonModel | null>;
    GetPokemonByRange(min: number, max: number) : Promise<Array<PokemonModel> | null>
}