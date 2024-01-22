/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  const existingCategories = await Category.find({ limit: 1 });
  if (existingCategories.length === 0) {
    await Category.createEach(sails.config.seeds.category);
  }

  // Check and seed products
  const existingProducts = await Product.find({ limit: 1 });
  if (existingProducts.length === 0) {
    // Since products depend on categories, ensure categories are inserted first
    for (let product of sails.config.seeds.product) {
      // Find the category ID based on the category name
      const category = await Category.findOne({ name: product.category });
      if (category) {
        await Product.create({ ...product, category: category.id });
      }
    }
  }

  if (await User.count() > 0) {
    return;
  }

  await User.createEach([
    {
      emailAddress: 'admin@fvf.de',
      emailStatus: 'confirmed',
      password: await sails.helpers.passwords.hashPassword('123'),
      firstName: 'Super',
      lastName: 'Admin',
      isSuperAdmin: true,
      isVendor: false,
    },
    {
      emailAddress: 'karl@kaeufer.de',
      emailStatus: 'confirmed',
      password: await sails.helpers.passwords.hashPassword('123'),
      firstName: 'Karl',
      lastName: 'Käufer',
      isSuperAdmin: false,
      isVendor: false,
    },
    {
      emailAddress: 'hans@haendler.de',
      emailStatus: 'confirmed',
      password: await sails.helpers.passwords.hashPassword('123'),
      firstName: 'Hans',
      lastName: 'Händler',
      isSuperAdmin:false ,
      isVendor: true ,
    }
  ])
    .intercept('E_UNIQUE', 'emailAlreadyInUse')
    .intercept({name: 'UsageError'}, 'invalid');
};
