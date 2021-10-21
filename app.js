//imports

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;


//middlewares 


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true})); 
app.use(express.static('uploads'));

//conexion db

mongoose.connect(process.env.db_uri, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: true, 
    useCreateIndex: true
}).then(() => console.log('Conectado a la BD'))
.catch((err) => console.log(err));


//rutas prefijadas

app.use("/api/post", require("./routes/routes"));

//inicio servidor

app.listen(process.env.PORT || port, () => console.log('Servidor escuchando'));

