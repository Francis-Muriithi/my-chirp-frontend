import React, {useEffect, useState}from 'react'
import {useParams, useHistory} from 'react-router-dom';

function Update() {
    const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const params = useParams()
    const history = useHistory()
    
    useEffect(()=>{
        getBirdDetails();
    }, [])

    const getBirdDetails = async()=>{
        let result = await fetch(`https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds/${params.id}`);
        result = await result.json();
        console.warn(result)
        setName(result.name)
        setImage(result.image)
        setDescription(result.description)
    }

    const updateBird = async()=>{
        console.warn(name, image, description)
        let result = await fetch(`https://6389cd9e4eccb986e89ae6f9.mockapi.io/Birds/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({name, image, description}),
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
            <button onClick ={updateBird}>Update Bird</button>
        </form>
    </div>
  )
}

export default Update