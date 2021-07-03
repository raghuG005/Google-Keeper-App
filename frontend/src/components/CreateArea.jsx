import React, { useState } from 'react';
import {createNote} from "../Data/notes"

function CreateArea(props)
{
    const [notevalue,setNote]=useState({
        title:'',
        description:'',
        error:""
    })
    
    
    const {title,description,error}=notevalue;
    const [expand,setexpand]=useState(false);   

    const handleChange=fieldName=>event=>{
          setNote({...notevalue,error:false,[fieldName]:event.target.value});
    }

     function expands()
     {
         setexpand(true);
     };
    
    const onSubmit=(event)=>{
        event.preventDefault();
        if(notevalue.title===''&&notevalue.description==='') 
        {
            alert("FIELD MUST BE FILLED");
            return;
        }
        setNote({...notevalue,error:false});
        createNote({title,description}).then(data=>{
            if(data.error)
            {
               setNote({...notevalue,error:data.error})
            }
            window.location.reload();
        })
        
        setNote({
           title:'',
            description:'',
            error:false
            });
            setexpand(false);
            
      };
      

    return (
        <div >
          <form>
                {expand && <input onChange={handleChange("title")} type='text' name='title' placeholder='Title' value={notevalue.title} />}<br />
               <textarea onClick={expands} onChange={handleChange("description")} name='description' value={notevalue.description} placeholder='add a note' row='2' /><br />
               {expand &&<button type='submit' onClick={onSubmit}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg></button>}
          </form>
         </div>
    );
}

export default CreateArea;