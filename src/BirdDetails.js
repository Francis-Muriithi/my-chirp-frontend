import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function BirdDetails() {
    const {id} = useParams();
    const {data:bird, error, isLoading} = useFetch('https://chirplog.herokuapp.com/birds/'+ id);
    const history = useHistory()

function handleDelete(){
    fetch('https://chirplog.herokuapp.com/birds/' + bird.id, {
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
         <h3> Adventure: {bird.adventure_id}</h3>
         <div className="links">
     </div>
     <div>
     <button className = 'delete' onClick={(handleDelete)}>Delete</button>
     </div>
     <Link to={"/update/" + bird.id}>
     <button className = "update" style={{color: "White", backgroundColor: "#ce859b", borderRadius: "8px",}}> Update</button>
     </Link>
     </article>
    )}

 </div>
  )
}

export default BirdDetails