const express = require("express");
const bodyParser = require('body-parser');
const app = express();

//servidor en puerto 4000, localhost:4000

//para emplear json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//TIPOS DE DATOS
let datosensor = {
 latitud:'',
 longitud: ''
};
let respuesta = {
 error: false,
 codigo: 200,
 mensaje: ''
};


//GET EN RAIZ
app.get('/', function (req, res) {
 respuesta = {
  error: true,
  codigo: 200,
  mensaje: 'Punto de inicio-> NO HAY FUNCIONALIDAD CREADA'
 };
 res.send(respuesta);
});

//PETICIONES 
app.get('/add', function (req, res) {

    console.log(req.body); //muestra los valores
 //Se inicializa variable de respuesta
  respuesta = {
  error: false,
  codigo: 200,
  mensaje: ''
    };

 if(datosensor.latitud === '' || datosensor.longitud === '') {
  respuesta = {
   error: true,
   codigo: 501,
   mensaje: 'El datosensor no ha sido creado'
  };
 } else {
  respuesta = {
   error: false,
   codigo: 200,
   mensaje: 'respuesta del datosensor',
   respuesta: datosensor
  };
 }
 res.send(respuesta);
});


app.post('/add', function (req, res) {

    console.log(req.body); //muestra los valores
    
 if(!req.body.latitud || !req.body.longitud) {
  respuesta = {
   error: true,
   codigo: 502,
   mensaje: 'El campo latitud y longitud son requeridos'
  };
 } else {
  if(datosensor.latitud !== '' || datosensor.longitud !== '') {
   respuesta = {
    error: true,
    codigo: 503,
    mensaje: 'El datosensor ya fue creado previamente'
   };
  } else {
   datosensor = {
    latitud: req.body.latitud,
    longitud: req.body.longitud
   };
   respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'datosensor creado',
    respuesta: datosensor
   };
  }
 }
 
 res.send(respuesta);
});



app.listen(4000, () => {
 console.log("El servidor está inicializado en el puerto 4000");
});