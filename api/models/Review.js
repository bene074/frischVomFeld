/**
 * Review.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    reviewID: {
      type: 'number',
      autoIncrement: true,
      columnName: 'reviewID'
    },
    date: {
      type: 'ref',
      columnType: 'date'
    },
    starRating: {
      type: 'number'
    },
    productID: {
      model: 'Product',
      columnName: 'productID'
    },
    userID: {
      model: 'User',
      columnName: 'userID'
    },
    comment: {
      type: 'string',
      columnType: 'text'
    }
  },
  primaryKey: 'reviewID',
  tableName: 'Review'
};
