module.exports = {


  friendlyName: 'View index',


  description: 'Display "Index" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/feedback/index'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
