/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Create a new product
  create: async function (req, res) {
    try {
      const newProduct = await Product.create(req.body).fetch();
      return res.status(201).json(newProduct);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Read product information
  read: async function (req, res) {
    try {
      const products = await Product.find();
      return res.status(200).json(products);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Update a product's information
  update: async function (req, res) {
    try {
      const updatedProduct = await Product.updateOne({ productID: req.params.id })
        .set(req.body);
      if (updatedProduct) {
        return res.status(200).json(updatedProduct);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Delete a product
  delete: async function (req, res) {
    try {
      const deletedProduct = await Product.destroyOne({ productID: req.params.id });
      if (deletedProduct) {
        return res.status(200).json(deletedProduct);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  }
};
