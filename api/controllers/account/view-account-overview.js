module.exports = {


  friendlyName: 'View account overview',


  description: 'Display "Account overview" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/account-overview'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
