/**
 * ReviewController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Create a new review
  create: async function (req, res) {
    try {
      const newReview = await Review.create(req.body).fetch();
      return res.status(201).json(newReview);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Read review information
  read: async function (req, res) {
    try {
      const reviews = await Review.find();
      return res.status(200).json(reviews);
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Update a review's information
  update: async function (req, res) {
    try {
      const updatedReview = await Review.updateOne({reviewID: req.params.id})
        .set(req.body);
      if (updatedReview) {
        return res.status(200).json(updatedReview);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

  // Delete a review
  delete: async function (req, res) {
    try {
      const deletedReview = await Review.destroyOne({reviewID: req.params.id});
      if (deletedReview) {
        return res.status(200).json(deletedReview);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  }
}
