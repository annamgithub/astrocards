import React from 'react'
import CardMakerForm from './CardMakerForm'
import ShowAndEdit from './ShowAndEdit'

function CardMakerDisplay() {
    return (
      <div className="card-maker-display">
        
        <CardMakerForm/>
        <ShowAndEdit/>

      </div>
    );
  }

export default CardMakerDisplay;