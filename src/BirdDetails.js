import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function BirdDetails() {
    const {id} = useParams();
    const {data:bird, error, isLoading} = useFetch('http://localhost:8000/birds/'+ id);
    const history = useHistory()

function handleDelete(){
    fetch('http://localhost:8000/birds/' + bird.id, {
        method: 'DELETE'
    }).then(()=> {
        history.push('/')
    })
}


  return (
    <div className='bird-details'>
    {isLoading && <div> Loading...</div>}
    {error && <div>{error}</div>}
    {bird && (
     <article>
         <h2>{bird.name}</h2>
         <img src={bird.image} alt= "bird" key={bird.id}></img>
         <div>{bird.description}</div>
         <div className="links">
     </div>
     <div>
     <button className = 'delete' onClick={(handleDelete)}>Delete</button>
     </div>
     <button className = "update" style={{color: "White", backgroundColor: "#acb4d0", borderRadius: "8px",}}>
     <Link to={"/update/" + bird.id}>
     <span className = "update">Update</span>
     </Link>
     </button>
     </article>
    )}

 </div>
  )
}

export default BirdDetails