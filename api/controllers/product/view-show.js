module.exports = {


  friendlyName: 'View show',


  description: 'Display "Show" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/product/show'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
