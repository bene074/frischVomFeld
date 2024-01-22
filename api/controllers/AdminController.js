module.exports = {
  friendlyName: 'View index',
  description: 'Display "Index" page.',

  exits: {
    success: {
      viewTemplatePath: 'pages/admin/index'
    },
    notSuperAdmin: {
      description: 'The requesting user is not a super admin.',
      responseType: 'redirect'
    }
  },

  fn: async function (req, res) {
    console.log("Admin view-index controller reached");

    // Check if the user is logged in and is a super admin
    if (!req.me || !req.me.isSuperAdmin) {
      // If not, redirect to the homepage or a "not allowed" page
      throw { notSuperAdmin: '/' };
    }

    // If the user is a super admin, continue to render the view
    return res.view('pages/admin/index');
  }
};
