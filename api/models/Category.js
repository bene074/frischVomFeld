// api/models/Category.js
module.exports = {
  attributes: {
    categoryID: {
      type: 'number',
      autoIncrement: true,
      columnName: 'categoryID'
    },
    name: {
      type: 'string',
      maxLength: 50
    },
    description: {
      type: 'string',
      columnType: 'text'
    }
  },
  primaryKey: 'categoryID',
  tableName: 'Category'
};
