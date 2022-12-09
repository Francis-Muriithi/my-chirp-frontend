import React from 'react'
import { Link } from 'react-router-dom';

function BirdList({birds, name, image} ){


  return (
    <div className= "bird-list">
      <h2>{name}</h2>
       {birds.map((bird)=>
        <div className="bird-preview" key={bird.id}>
          <Link to ={`/birds/${bird.id}`} >
            <img src={bird.image} alt="bird" />
            <h2> Name: {bird.name}</h2>
            </Link>
        </div>
        )}
    </div>
  );
}

export default BirdList