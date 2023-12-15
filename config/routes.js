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

  'GET /logout':                         { action: 'account/logout' },
  'POST  /login':                        { action: 'login/login' },
  'POST  /signup':                       { action: 'login/signup' },
  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },

  'GET /account':                        { action: 'account/view-account-overview' },
  'GET /account/password':               { action: 'account/view-edit-password' },
  'GET /account/profile':                { action: 'account/view-edit-profile' },

  'POST  /updateProfile':                { action: 'account/update-profile' },
  'POST  /updatePassword':               { action: 'account/update-password' },

  'GET /addProduct' :                    {controller: 'ProductController', action: 'new'},
  'POST /product':                       { controller: 'ProductController', action:'create' },
  'GET /product': 'ProductController.find',
  'GET /product/:id': 'product.findOne',
  'GET /product/:id/destroy':            { controller: 'ProductController', action: 'destroyOne' },
  'GET /product/:id/edit':               { controller: 'ProductController', action: 'editOne' },
  'POST /product/:id/update':            { controller: 'ProductController', action: 'updateOne' },




  'GET /category': { controller: 'CategoryController', action: 'find' },
  'GET /addCategory': { view: 'pages/category/add' },
  'POST /category': { controller: 'CategoryController', action:'create' },
  'GET /category/:id/destroy': { controller: 'CategoryController', action: 'destroyOne' },

  'GET /shoppingbasket': { view: 'pages/shoppingbasket/index' },
  'GET /admin': { view: 'pages/admin/index' },
  'GET /evaluation': { view: 'pages/evaluation/index' },
  'GET /feedback': { view: 'pages/feedback/index' },
  'GET /order': { view: 'pages/order/index' },



  'GET /usermanagement': { controller: 'UsermanagementController', action: 'find' },
  'GET /usermanagement/:id/destroy': { controller: 'UsermanagementController', action: 'destroyOne' },

 

  '/helloworld': { view: 'pages/vue/helloworld' },

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
