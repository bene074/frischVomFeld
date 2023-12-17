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

    order: async function (req, res) {
      // Add order logic here
      req.session.basket = []; // For now, just clearing the basket
      return res.ok();
    },
};

