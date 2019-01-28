/*
Imports
*/
const express = require('express');
const postRouter = express.Router();

//


/*
Configuration
*/
class PostRouterClass {
    constructor(){}
    routes(){
        // Create item
        postRouter.post('/', (req, res) => {
            res.json({msg: "Create post", req: req.body});
        });

        // Read item
        postRouter.get('/', (req, res) => {
            res.json({msg: "Read post"});
        });

        // Update item
        postRouter.put('/', (req, res) => {
            res.json({msg: "Update post"});
        });

        // Delete item
        postRouter.delete('/', (req, res) => {
            res.json({msg: "Delete post"});
        });
    }

    init() {
        this.routes();
        return postRouter;
    }
}
//


/*
Exports
*/
module.exports = PostRouterClass;
//