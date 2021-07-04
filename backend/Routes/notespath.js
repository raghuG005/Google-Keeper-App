const express = require("express");
const router = express.Router()


//CONTROLLERS
const {createNote,
    getAllnote,
    removeNote,
    updateNote
} = require("../Controllers/notes");

//MIDDLEWARES
const {isAuthenticate} = require('../Middlewares/authenticate')


//CREATE
router.post("/note",isAuthenticate,createNote);

//READ

router.post("/allnotes",isAuthenticate,getAllnote);

//UPDATE
router.post("/updatenote/:id",isAuthenticate,updateNote);

//DELETE
router.delete("/removenote/:id",isAuthenticate,removeNote);

module.exports = router
