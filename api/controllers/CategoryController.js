/**
 * CategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Create a new category
  create: async function (req, res) {
    try {
      const newCategory = await Category.create(req.body).fetch();
      return res.status(201).json(newCategory);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Read category information
  read: async function (req, res) {
    try {
      const categories = await Category.find();
      return res.status(200).json(categories);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Update a category's information
  update: async function (req, res) {
    try {
      const updatedCategory = await Category.updateOne({ categoryID: req.params.id })
        .set(req.body);
      if (updatedCategory) {
        return res.status(200).json(updatedCategory);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Delete a category
  delete: async function (req, res) {
    try {
      const deletedCategory = await Category.destroyOne({ categoryID: req.params.id });
      if (deletedCategory) {
        return res.status(200).json(deletedCategory);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  }
};
