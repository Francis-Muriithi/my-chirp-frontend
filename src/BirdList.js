import React from 'react'
import { Link } from 'react-router-dom';

function BirdList({birds, name, image} ){


  return (
    <div className= "blog-list">
      <h2>{name}</h2>
       {birds.map((bird)=>
        <div className="bird-preview" key={bird.id}>
          <Link to ={`/birds/${bird.id}`} >
            <img src={bird.image} alt="bird" />
            {/* <h2>{bird.adventure_id}</h2>
            <p>{bird.description}</p> */}
            </Link>
        </div>
        )}
    </div>
  );
}

export default BirdList