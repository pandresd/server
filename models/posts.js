const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    titulo: String,
    nombre : String,
    correo: String,
    contenido: String,
    created :{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", postSchema);