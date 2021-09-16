const express = require('express');
const app = express();
//const router = express.router();
//const port = 4000;    
require('dotenv').config({path:'./config/dot.env'})
const port = process.env.PORT_SERVER || 4500

app.listen(port, () =>{
    console.log(`servidor escuchando en url+port: http://localhost:${port}`)});


app.get('/', (req, res) => {
  
  console.log(`getfileapp.js`)
    //res.send('tareaClase 1-8 ')
  `
    <html>
    <head></head>
            <body>
            <p> hola mundo </p>
            </body>

    </html>
    `
});

//metodo post

app.post('/', (req, res) => {
`
 <html>
    <head></head>
            <body>  
                 <p> POST</p>
            </body>

</html>

`
})


