// api/models/Category.js
module.exports = {
    attributes: {
        categoryID:{
            type: 'number',
            columnType: 'integer',
        },
        name: {
            type: 'string',  
            columnType: 'varchar(80)',  
            required: true,
        },
        description: {
            type: 'String',  
            columnType: 'text',  
        },
    }
  };