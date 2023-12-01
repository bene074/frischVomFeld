module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/order/index'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
