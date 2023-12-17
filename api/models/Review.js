/**
 * Review.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    value: {
      type: 'string',
      required: true,
      description: 'The content of the review or the rating value.'
    },
    product: {
      model: 'product',
      required: true,
      description: 'The product to which this review belongs.'
    },
    user: {
      model: 'user',
      required: true,
      description: 'The user who created this review.'
    }
  }
};
