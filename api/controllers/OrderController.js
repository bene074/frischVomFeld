// api/controllers/OrderController.js
module.exports = {
  findUserOrders: async function(req, res) {
    if (!req.session.userId) {
      return res.forbidden(); // or redirect to login page
    }

    try {
      const userOrders = await Order.find({ user: req.session.userId })
        .populate('product');

      return res.view('pages/order/order', { userOrders: userOrders });
    } catch (error) {
      sails.log.error('Error fetching user orders:', error);
      return res.serverError('Error occurred while fetching orders.');
    }
  },
};
