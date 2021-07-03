import React,{useState,useEffect} from 'react';
import Header from './Header';
import CreateArea from './CreateArea';
 import Note from './Note';
import Footer from './Footer';
import {getAllNotes,removeNote} from "../Data/notes"


function App()
{
        useEffect(() => {
           handleAdd();
        }, [])
        const [allNotes,setAllNotes]=useState([]);
   //Where to put this GET method?
        
        function handleAdd()
        {
           getAllNotes().then(res=>{
                setAllNotes(res.notes)
                });
                  
        }
        function handleDelete(id)
        {
            removeNote(id).then(res=>{return res});
            window.location.reload();
        }
        return (
        <div>
        
            <Header />
            <CreateArea onAdd={handleAdd} />
            
            {allNotes.map((item) => 
             { return <Note
              key={item._id} 
              id={item._id}
              title={item.title} 
              description={item.description}
              onDelete={handleDelete}
              />
            }
          )}
             <Footer />
        </div>
    );
}

export default App;