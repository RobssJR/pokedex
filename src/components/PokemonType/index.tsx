import { Type2 } from '../../Core/Models/PokemonModel';
import { StringFunctions } from '../../Core/Util/StringFunctions';
import './style.css'

interface props {
    type: Type2;
}

const backgroudTypes: Record<string, string> = {
    "fire": "#fd7d24",
    "water": "#4592c4",
    "grass": "#9bcc50",
    "poison": "#b97fc9",
    "bug": "#729f3f",
    "ground": "#ab9842",
    "normal": "#a4acaf",
    "electric": "#eed535",
    "fighting": "#d56723",
    "psychic": "#f366b9",
    "ice": "#51c4e7",
    "ghost": "#7b62a3",
    "dragon": "#76e",
    "rock": "#ba6",
    "flying": "#89f",
    "steel": "#aab",
    "fairy": "#e9e",
    "dark": "#333"
}

export default function PokemonType({ type }: props) {
    return (
        <div className='type-container' style={{
            backgroundColor: backgroudTypes[type.name]
        }}>
            <p className='type'>{StringFunctions.Capitalize(type.name)}</p>
        </div>
    )
}
