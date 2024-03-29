/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    try {
      const isVendor = req.body.isVendor;

      const newUser = await User.create(req.body, isVendor).fetch();
      sails.log.info("neuer User: ",newUser)
      return res.status(201).json(newUser);
    } catch (err) {
      sails.log.error(err)
      return res.serverError(err);
    }
  },

  read: async function (req, res) {
    try {
      const users = await User.find();
      return res.status(200).json(users);
    } catch (err) {
      return res.serverError(err);
    }
  },

  update: async function (req, res) {
    try {
      const updatedUser = await User.updateOne({ userID: req.params.id })
        .set(req.body);
      if (updatedUser) {
        return res.status(200).json(updatedUser);
      } else {
        return res.notFound();
      }
    } catch (err) {
      return res.serverError(err);
    }
  },

};
