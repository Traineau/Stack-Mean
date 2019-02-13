/* 
Imports
*/
    // Node
    const bcrypt = require('bcrypt');
    
    // Inner
    const MessageModel = require('../../models/message.model');
//


/* 
Méthodes CRUD
*/
    const createItem = (body) => {
        return new Promise((resolve, reject) => {
            // Récupérer l'id de l'auteur
            body.author = 'fuu'

            MessageModel.create(body)
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