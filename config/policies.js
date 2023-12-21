/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

  '*': 'is-logged-in',

  // Bypass the `is-logged-in` policy for:
  'login/*': true,
  'account/logout': true,
  '/':true,
  'view-admin': 'is-super-admin',
  'admin': 'is-super-admin',

  ProductController: {
    '*':  'is-vendor',
    destroy: 'is-super-admin',
    find:true,
    findOne: true
  },

  CategoryController: {
    '*': 'is-super-admin',
    find: true
  },

  ShoppingBasketController: {
    '*': true // This allows public access to all actions in the Shopping Basket Controller
  },

  ReviewController:{
    '*':true
  }

};
