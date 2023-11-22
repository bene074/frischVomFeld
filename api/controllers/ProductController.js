/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Sails = require("sails/lib/app/Sails");

module.exports = {
  new: async function (req, res) {
    let categories = await Category.find();
    console.log("kategorien")
    console.log(categories)
    res.view('pages/addProduct', { categories });
  },

  create: async function (req, res) {
    sails.log.debug("Create product....")
    let params = req.allParams();
    await Product.create(params);
    let products = await Product.find();
    res.view ('pages/product/index', { products: products } );
  },

  find: async function (req, res) {
    sails.log.debug("List all products....");
    let products;
    let query = {};

    if (req.query.q && req.query.q.length > 0) {
      query.name = { 'contains': req.query.q };
    }

    if (req.query.categoryId && req.query.categoryId !== 'all') {
      query.category = req.query.categoryId;
    }
    let selectedCategoryId = req.query.categoryId || 'all';


    try {
      // Fetch products based on the query
      products = await Product.find(query).populate("category");

      // Fetch all categories for the filter dropdown
      let categories = await Category.find();
      sails.log.debug(selectedCategoryId)
      // Pass both products and categories to the view
      res.view('pages/product/index', { products: products, categories: categories, selectedCategoryId: selectedCategoryId });
    } catch (error) {
      sails.log.error('Error fetching products:', error);
      return res.serverError('Error occurred while fetching products.');
    }
  },


  findOne: async function (req, res) {
    sails.log.debug("List single product....")
    let product = await Product.findOne({ id: req.params.id }).populate("category");
    res.view ('pages/product/show', { product: product } );
  },

  destroyOne: async function (req, res) {
    sails.log.debug("Destroy single product....")
    await Product.destroyOne({ id: req.params.id });
    res.redirect('/product');
  },

  editOne: async function (req, res) {
    sails.log.debug("Edit single product....")
    let product = await Product.findOne({ id: req.params.id }).populate('category');
    res.view('pages/product/edit', { product: product });
  },

  updateOne: async function (req, res) {
    sails.log.debug("Update single product....")
    let product = await Product.updateOne({ id: req.params.id }).set(req.body);
    res.redirect('/product');
  },

  report: async function (req, res) {
    let sql = "select m.id, m.name, m.createdAt, m.updatedAt from product as m order by m.updatedAt desc;";
    var rawResult = await sails.sendNativeQuery(sql);

    console.dir(rawResult);
    let entries  = [];
    rawResult.rows.forEach(element => {
      entries.push(element);
    });
    res.view('pages/product/report', { entries });
  }
};
