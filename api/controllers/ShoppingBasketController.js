/**
 * ShoppingBasketController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Sails = require("sails/lib/app/Sails");


module.exports = {


  show: async function (req, res) {
    sails.log.debug(req.session.basket)
    res.view('pages/order/shoppingbasket', {
      initialBasket: req.session.basket || []
    });
  },


  put: async function (req, res) {

        let product = await Product.findOne({ id: req.params.productid });
        if (!req.session.basket) {
            req.session.basket = [];
            req.session.basket.push(product);
        } else {
            req.session.basket.push(product);
        }
        // All done.
        res.redirect('/shoppingbasket');
    },

    remove: async function (req, res) {
        req.session.basket.splice(req.params.index, 1);
        res.redirect('/shoppingbasket');
    },

    clear: async function (req, res) {
      req.session.basket = [];
      return res.ok();
    },

  // api/controllers/ShoppingBasketController.js
  order: async function (req, res) {
    try {
      const basket = req.session.basket;

      if (!basket || basket.length === 0) {
        return res.badRequest('Basket is empty.');
      }

      // Create an order for each item in the basket
      const orders = await Promise.all(basket.map(async (item) => {
        return await Order.create({
          user: req.session.userId,
          product: item.id
        }).fetch();
      }));

      // Clear the basket
      req.session.basket = [];

      return res.ok(orders);
    } catch (error) {
      sails.log.error('Error creating orders:', error);
      return res.serverError('Error occurred while creating orders.');
    }
  },

};

