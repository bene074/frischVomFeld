
/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    availability: {
      type: 'boolean'
    },
    image: {
      type: 'string',
      maxLength: 255
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
    priceType: {
      type: 'string',
      isIn: ['unit', 'weight'],
    },
    category: {
      model : 'category'
    }
  },
  tableName: 'Product'
};
