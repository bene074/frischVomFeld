/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests with User data.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    find: async function (req, res) {
      sails.log.debug("List users....")
      let users = await User.find();
      res.view('pages/account/usermanagement', { users });
    },
  
    destroyOne: async function (req, res) {
      sails.log.debug("Destroy user....")
      await User.destroyOne({ id: req.params.id });
      res.redirect('/usermanagement');
    },
  };