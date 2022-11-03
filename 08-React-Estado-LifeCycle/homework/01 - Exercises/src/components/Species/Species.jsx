import React from 'react'

export default function Species (props) {
  return (
    <div>
        <h2>Species</h2>
        {
          props.species.map(especie=> <button value={especie} onClick={props.handleSpecies} key={especie}>{especie}</button>)
        }
        <button onClick={props.handleAllSpecies}>All Animals

        </button>
    </div>
  )
}
