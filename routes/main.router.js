/*
Imports
*/
    //=> NodeJS
    const { Router } = require('express');

    //=> Inner
    const FrontRouterClass = require('./front/front.routes');
    const PostRouterClass = require('./post/post.routes');
//

/*
Configuration
*/
    //=> Définition des routers Parent
    const mainRouter = Router();
    const apiRouter = Router();

    //=> Définition des routers enfants
    const frontRouter = new FrontRouterClass();
    const postRouter = new PostRouterClass();
    
    //=> Définir les routes
    mainRouter.use('/api', apiRouter);
    apiRouter.use('/post', postRouter.init());
    mainRouter.use('/', frontRouter.init());
//

/*
Export
*/
    module.exports = mainRouter;
//