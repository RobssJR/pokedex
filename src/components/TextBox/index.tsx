import './style.css'

import { MdCatchingPokemon } from 'react-icons/md';

import React from 'react'

interface Props {
    type: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    value: any,
    placeholder: string
}

export default function TextBox(props : Props) {
  return (
    <div className='input-div'>
        <div className='icon-container'>
            <MdCatchingPokemon 
                className='input-icon'
                size={30}/>
        </div>

        <input 
            className='input-class' 
            type={props.type} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            value={props.value}/>
    </div>
  )
}
