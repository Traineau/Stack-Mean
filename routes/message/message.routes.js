/* 
Import & config
*/
const express = require('express');
const messageRouter = express.Router();
//

/* 
Definition
*/
class MessageRouterClass {
    constructor(){}

    routes(){
        // Create
        messageRouter.post( '/', (req, res) => {
            // req.user._id
            
            res.json( { msg: "Create Message", req: req.body } )
        })

        // Read
        messageRouter.get( '/', (req, res) => {
            res.json( { msg: "Read Message" } )
        })

        // Update
        messageRouter.put( '/', (req, res) => {
            res.json( { msg: "Update Message" } )
        })

        // Delete
        messageRouter.delete( '/', (req, res) => {
            res.json( { msg: "Delete Message" } )
        })
    }

    init(){
        this.routes();
        return postRouter;
    }
}
//

/* 
Export
*/
module.exports = PostMessageClass;
//