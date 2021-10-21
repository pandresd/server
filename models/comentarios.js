const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    titulo: String,
    nombre : String,
    correo: String,
    comentario: String,
    created :{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", postSchema);