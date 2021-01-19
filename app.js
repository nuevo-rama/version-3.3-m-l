const express = require('express');
const app = express();

// Método para formatear el puerto en base al argumento enviado en npm start
const formattedPort = process.env.PORT || 3000

// Se define la carpeta pública para exponer assets y archivos estáticos
app.use(express.static('public'));

// Se levanta el servidor en el resultado de parsear el puerto desde el argumento
app.listen(formattedPort, () =>{
    console.log('Servidor funcionando en puerto '+ formattedPort);
});

// Se definen rutas y respuestas en el mismo script (recordar que esto puede modularizarse)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
