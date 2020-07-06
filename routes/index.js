var express = require('express');
const ArticlesModel = require('../models/articles');
var OrdersModel = require('../models/orders')
var router = express.Router();
var mongoose = require('mongoose')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  res.render('tasks');
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  res.render('messages');
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  res.render('users');
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  var articles = await ArticlesModel.find()
  res.render('catalog', {articles, articles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  var orders = await OrdersModel.find()
  console.log(orders)
  res.render('orders-list', {orders:orders});
});

/* GET Order detail page. */
router.get('/order-page', function(req, res, next) {
  res.render('order');
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
