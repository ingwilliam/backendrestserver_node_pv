const express = require('express')
const cors = require('cors');

class Server{

    constructor(){
        //Configuracion
        this.app = express();
        this.port=process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middleres
        this.middleres();
        //Rutas de mi aplicacion
        this.routes();
    }

    middleres(){

        //CORS
        this.app.use(cors())

        //Lectura y parseo del Body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes(){
        
        this.app.use(this.usuariosPath,require( '../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en ',this.port);
        })
    }
}


module.exports=Server;