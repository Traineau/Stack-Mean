/*
Imports
*/
    const express = require('express');
    const frontRouter = express.Router();

//


/*
Configuration
*/
    class FrontRouterClass {
        constructor(){}
        routes(){
            //=> Configurer la page d'accueil
            frontRouter.get('/', (req, res) => {
                //=> Rendre le fichier index
                res.render('index');
            });

            frontRouter.get('/me', (req, res) => {
                //=> Rendre le fichier index
                res.render('me');
            });
        }

        init() {
            this.routes();
            return frontRouter;
        }
    }
//


/*
Exports
*/
    module.exports = FrontRouterClass;
//