const express = require('express'); // Traemos la librería express. Crea la base de datos.
const {connect} = require('./src/utils/db')
const moviesRoutes = require('./src/API/routes/movies.routes')


const PORT = 5000;
const app = express();
connect();

//2º Paso traer connect al index.js y ejecutarlo.

app.use(express.json());
app.use(express.urlencoded({extended:false}))

//3º Paso dar la ruta principal

app.use("/movies", moviesRoutes);

app.listen(PORT, ()=> console.log(`Conectado al puerto: ${PORT}`))

