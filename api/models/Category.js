// api/models/Category.js
module.exports = {
  attributes: {
    name: {
      type: 'string',
      maxLength: 50
    },
    description: {
      type: 'string',
      columnType: 'text'
    },
    meals :{
      collection : 'product',
      via : 'category'
    }
  },
  tableName: 'Category'
};
