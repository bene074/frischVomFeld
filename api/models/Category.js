// api/models/Category.js
module.exports = {
  attributes: {
    name: {
      type: 'string',
      maxLength: 50
    },
    products :{
      collection : 'product',
      via : 'category'
    }
  },
  tableName: 'Category'
};
