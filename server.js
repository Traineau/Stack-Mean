/*
Imports
*/
    //=> Intégrer les variables d'environnement
    require('dotenv').config();
    //=> Intégrer ExpressJs pour la gestion du serveur
    const express = require('express');
    //=> Gestion du dossier client (WWW)
    const path = require('path');
    //=> Gestion du moteur de rendu
    const ejs = require('ejs');
    //=> Gestion du corps des requetes
    const bodyParser = require('body-parser');
    //=> Importer le routeur
    const mainRouter = require('./routes/main.router'); 
//


/*
Configuration
*/
    //=> Création du serveur
    const server = express();
    const port = process.env.PORT; // Utilisation d'une variable d'environnement

    //=> Création d'une classe pour la configuration serveur
    class ServerClass{
        init(){
            //=> Configuration du moteur de rendu
            server.engine('html', ejs.renderFile);
            server.set('view engine', 'html');

            //=> Configuration du dossier client
            server.set('views', __dirname + '/www');
            server.use(express.static(path.join(__dirname, 'www')));

            //=> BodyParser
            server.use(bodyParser.json({limit: '10mb'}));
            server.use(bodyParser.urlencoded({extended: true}));

            //=> Router
            server.use('/', mainRouter);

            //=> Lancer le serveur
            this.launch();
        }
        launch(){
            server.listen(port, () => {
                console.log(`Server listening on port ${port}`)
            })
        }
    }
//


/*
Launch
*/
    new ServerClass().init();
//