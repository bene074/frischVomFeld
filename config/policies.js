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

  'login/*': true,
  'account/logout': true,

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
    '*': 'is-logged-in' // This allows public access to all actions in the Shopping Basket Controller
  },

  ReviewController:{
    '*':true
  }

};
