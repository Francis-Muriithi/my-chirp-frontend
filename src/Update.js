import React, {useEffect, useState}from 'react'
import {useParams } from 'react-router-dom';

function Update() {
    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [adventure_id, setAdventure] =useState('')
    const [description, setDescription] = useState('')
    const params = useParams()
    
    useEffect(()=>{
        getBirdDetails();
    }, [])

    const getBirdDetails = async()=>{
        let result = await fetch(`https://chirplog.herokuapp.com/birds/${params.id}`);
        result = await result.json();
        console.warn(result)
        setName(result.name)
        setImage(result.image)
        setDescription(result.description)
        setAdventure(result.adventure_id)
    }

    const updateBird = async()=>{
        console.warn(name, image, description)
        let result = await fetch(`https://chirplog.herokuapp.com/birds/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify({name, image, description, adventure_id}),
            headers: {'Content-type': 'Application/json'},
        });  
    }
    
  return (
    <div className='update'>
        <h2>Update Bird</h2>
        <form>
            <label> Bird Name</label>
            <input type="text" required  value={name} onChange={(e)=> setName(e.target.value)}/>
            <label> Bird's Image</label>
            <input required value={image} onChange={(e)=> setImage(e.target.value)}/>
            <label> Bird's Description</label>
            <textarea required value= {description} onChange={(e)=> setDescription(e.target.value)}/>
            <label> Adventure</label>
            <input required value= {adventure_id} onChange={(e)=> setAdventure(e.target.value)}/>
            <button onClick ={updateBird}>Update Bird</button>
        </form>
    </div>
  )
}

export default Update