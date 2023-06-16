import './style.css'
import { MdCatchingPokemon } from 'react-icons/md';

import React from 'react'

interface Props {
    type: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: any
}

export default function TextBox(props : Props) {
  return (
    <div className='input-div'>
        <div className='icon-container'>
            <MdCatchingPokemon 
                className='input-icon'
                size={30}
                color='red'/>
        </div>

        <input 
            className='input-class' 
            type={props.type} 
            onChange={props.onChange}
            value={props.value}/>
    </div>
  )
}
