const Note = require('../Model/note');





//CreateNote
exports.createNote = (req,res)=>{

    console.log(req.user.id)
    const note = new Note({

        title :req.body.title ,
        description: req.body.description,
        user_id : req.user.id
    });

    note.save((error,note)=>{
        if(error){
            return res.status(403).json({
                error: "Error while saving a data"
            });
        }
        return res.status(200).json({
            message : "Added Successfully",
            id : req.user.id
        });
    })
}

//GetAllNotesfromDB
exports.getAllnote = (req,res)=>{
    Note.find({user_id:req.user.id},(error,datas)=>{
        if(error){
            return res.status(403).json({
                error: "Error while get a data"
            });
        }

        return res.json(datas);

    })
}

//RemoveNotefromDB
exports.removeNote = (req,res)=>{
    Note.findOneAndDelete({
        _id:req.params.id
    },(error,note)=>{

        if(!note){
            return res.status(404).json({
                error:"ID not found"
            });

        }
        
        else if(error){
            return res.status(403).json({
                error: "Error while delete a data"
            });
        }

        return res.status(200).json({
            message:"Deleted successfully"
        });
    })

}
//UpdateNotefromDB
exports.updateNote = (req,res)=>{
    Note.updateOne(
        {_id:req.params.id},
        {$set:req.body},
        {new:true,useFindAndModify:false},
        (error,data)=>{
            if(!data){
                return res.status(404).json({
                    error:"ID not found"
                });
    
            }
            
            else if(error){
                return res.status(403).json({
                    error: "Error while delete a data"
                });
            }

            return res.json(data);

        });
        
}