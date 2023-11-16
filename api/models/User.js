/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    userID: {
      type: 'number',
      autoIncrement: true,
      columnName: 'userID'
    },
    firstName: {
      type: 'string',
      maxLength: 50
    },
    lastName: {
      type: 'string',
      maxLength: 50
    },
    email: {
      type: 'string',
      isEmail: true,
      maxLength: 100
    },
    role: {
      type: 'string',
      maxLength: 20
    },
    products: {
      collection: 'Product',
      via: 'sellerID'
    },
    reviews: {
      collection: 'Review',
      via: 'userID'
    }
  },
  primaryKey: 'userID',
  tableName: 'User'
};

