module.exports = {
  attributes: {
    user: {
      model: 'user',
      required: true
    },
    product: {
      model: 'product',
      required: true
    },
    // Other fields like order date, status, etc., can be added as needed.
  },
};
