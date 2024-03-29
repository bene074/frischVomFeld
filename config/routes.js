/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  'GET /login':                          { action: 'login/view-login' },
  'GET /signup':                         { action: 'login/view-signup' },

  'GET /imprint':                         { view: 'pages/legal/imprint' },
  'GET /dataprotection':                  { view: 'pages/legal/dataprotection' },
  'GET /contact':                         { view: 'pages/legal/contact' },

  'GET /logout':                         { action: 'account/logout' },
  'POST  /login':                        { action: 'login/login' },
  'POST  /signup':                       { action: 'login/signup' },
  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },

  'GET /account':                        { action: 'account/view-account-overview' },
  'GET /account/password':               { action: 'account/view-edit-password' },
  'GET /account/profile':                { action: 'account/view-edit-profile' },

  'GET /addProduct' :                    {controller: 'ProductController', action: 'new'},
  'POST /product':                       { controller: 'ProductController', action:'create' },
  'GET /product': 'ProductController.find',
  'GET /product/:id': 'product.findOne',
  'GET /product/:id/destroy':            { controller: 'ProductController', action: 'destroyOne' },
  'GET /product/:id/edit':               { controller: 'ProductController', action: 'editOne' },
  'POST /product/:id/update':            { controller: 'ProductController', action: 'updateOne' },

  'POST /review/create': 'ReviewController.create',
  'POST /review/delete/:id': 'ReviewController.delete',



  'GET /category': { controller: 'CategoryController', action: 'find' },
  'GET /addCategory': { view: 'pages/category/add' },
  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },

  'GET /admin': 'AdminController.fn',

  'GET /usermanagement': { controller: 'UsermanagementController', action: 'find' },
  'GET /usermanagement/:id/destroy': { controller: 'UsermanagementController', action: 'destroyOne' },

  'GET /order': 'OrderController.findUserOrders',



  'GET /shoppingbasket': 'ShoppingBasketController.show',
  'POST /shoppingbasket/add/:productid': 'ShoppingBasketController.put',
  'POST /shoppingbasket/remove/:index': 'ShoppingBasketController.remove',
  'POST /shoppingbasket/clear': 'ShoppingBasketController.clear',
  'POST /shoppingbasket/order': 'ShoppingBasketController.order',
  'GET /product/:id/uploadImageForm': { controller: 'ProductController', action: 'uploadImageForm' },
  'POST /product/:id/uploadImage': { controller: 'ProductController', action: 'uploadImage' },



  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

};
