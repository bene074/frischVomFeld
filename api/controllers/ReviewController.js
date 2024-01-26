/**
 * ReviewController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  // Create a new review
  create: async function (req, res) {
    let reviewParams = {
      value: req.body.value,
      product: req.body.productId,
      user: req.session.userId // Assuming the user ID is in the session
    };

    try {
      await Review.create(reviewParams);
      res.redirect('/product/' + req.body.productId); // Redirect back to the product page
    } catch (error) {
      res.serverError(error.toString());
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

  // Delete a review
  delete: async function (req, res) {
    const reviewId = req.params.id;
    const userId = req.session.userId; // Assuming user ID is stored in session

    try {
      const review = await Review.findOne({ id: reviewId });
      if (!review) {
        return res.notFound('Review not found.');
      }

      if (review.user !== userId) {
        return res.forbidden('You are not allowed to delete this review.');
      }

      await Review.destroyOne({ id: reviewId });
      res.redirect('/product/' + review.product); // Redirect back to the product page
    } catch (error) {
      res.serverError(error.toString());
    }
  }
}
