const express = require("express");
const router = express.Router()


//CONTROLLERS
const {createNote,
    getAllnote,
    removeNote,
    updateNote
} = require("../Controllers/notes");


//CREATE
router.post("/note",createNote);

//READ

router.post("/allnotes",getAllnote);

//UPDATE
router.post("/updatenote/:id",updateNote);

//DELETE
router.delete("/removenote/:id",removeNote);

module.exports = router
