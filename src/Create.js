import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function Create() {
  const [name, setName] =useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [adventure_id, setAdventure] = useState( );
    // const [adventureTitle, setAdventureTitle] = useState( );
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    const bird = {name, image, description, adventure_id}

fetch('https://chirplog.herokuapp.com/birds/', {
method: 'POST',
headers: {'Content-Type': "application/json"},
body: JSON.stringify(bird)
}).then(()=>{
setIsLoading(false)

// Redirects us to homepage after adding the blog
history.push('/')
});
}
  return (
    <div className='create'>
      <h2> Add New Bird</h2>
    <form onSubmit={handleSubmit}>
            <label> Bird Name</label>
            <input type="text" required  value={name} onChange={(e)=> setName(e.target.value)}/>
            <label> Bird's Image</label>
            <input required value={image} onChange={(e)=> setImage(e.target.value)}/>
            <label> Bird's Description</label>
            <textarea required value= {description} onChange={(e)=> setDescription(e.target.value)}/>
            <label>Adventure Title</label>
            <input type="text" required  value={adventure_id} onChange={(e)=> setAdventure(e.target.value)}/>
            {!isLoading && <button>Add Bird</button>}
            {isLoading && <button disabled>Adding bird....</button>}
        </form>
        </div>
  )
}

export default Create