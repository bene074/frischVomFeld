/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    productID: {
      type: 'number',
      autoIncrement: true,
      columnName: 'productID'
    },
    availability: {
      type: 'boolean'
    },
    image: {
      type: 'string',
      maxLength: 255
    },
    sellerID: {
      model: 'User',
      columnName: 'sellerID'
    },
    name: {
      type: 'string',
      maxLength: 100
    },
    description: {
      type: 'string',
      columnType: 'text'
    },
    price: {
      type: 'number',
      columnType: 'decimal(10,2)'
    },
    reviews: {
      collection: 'Review',
      via: 'productID'
    }
  },
  primaryKey: 'productID',
  tableName: 'Product'
};
