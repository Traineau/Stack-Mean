/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    
    // Inner
    const PostModel = require('../../models/post.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise((resolve, reject) => {
            // Récupérer l'id de l'auteur
            body.author = 'fuu'

            PostModel.create(body)
            .then(mongoResponse => resolve(mongoResponse))
            .catch(mongoResponse => reject(mongoResponse))
        })
    };

    const readItem = () => {

    }

    const updateItem = () => {

    }

    const deleteItem = () => {

    }
//

/* 
Exports
*/
    module.exports = {
        createItem,
        readItem,
        updateItem,
        deleteItem
    }
//