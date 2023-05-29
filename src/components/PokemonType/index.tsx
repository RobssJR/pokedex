import { CustomConstants } from '../../Core/Constants/CustomConstants';
import { Type2 } from '../../Core/Models/PokemonModel';
import { StringFunctions } from '../../Core/Util/StringFunctions';
import './style.css'

interface props {
    type: Type2;
}

export default function PokemonType({ type }: props) {
    return (
        <div className='type-container' style={{
            backgroundColor: CustomConstants.backgroudTypes[type.name]
        }}>
            <p className='type'>{StringFunctions.Capitalize(type.name)}</p>
        </div>
    )
}
