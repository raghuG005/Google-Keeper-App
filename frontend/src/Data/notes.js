  
  const api="http://localhost:8000/api"
  
  export const createNote=note=>{
        return fetch(`${api}/note`,{
           method:"POST",
           headers:{
             Accept:"application/json",
             "Content-Type":"application/json"
           },
           body:JSON.stringify(note)
         })
         .then(res=>{return res.json()})
         .catch(err=>console.log(err));
  }

  export const getAllNotes=()=>{
    return fetch(`${api}/allnotes`)
    .then(res=>{return res.json()})
    .catch(err=>console.log(err));
  }

  export const removeNote=noteId=>{
         return fetch(`${api}/removenote/${noteId}`,{
           method:"DELETE",
         })
         .then(res=>{return res.json()})
         .catch(err=>console.log(err));
  }