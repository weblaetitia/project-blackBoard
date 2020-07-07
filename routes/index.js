var express = require('express')
var ArticlesModel = require('../models/articles')
var OrdersModel = require('../models/orders')
var UserModel = require('../models/users')
var router = express.Router()


/* GET home page. */
router.get('/', function(req, res, next) {
  ArticlesModel.find().where('stock').equals(0).exec(function (err, noStocks) {
    if (err) return handleError(err)
    UserModel.findOne({_id: '5c52e4efaa4beef85aad5e52'}).select('messages tasks').exec(function (err, admin) {
      if (err) return handleError(err)
      var adminMsgs = admin.messages
      var unreadMsgNum = 0
      adminMsgs.forEach(message => {
        if (message.read == false) {
          unreadMsgNum++
        }
      })
      var adminTasks = admin.tasks
      var tasksNum = 0
      console.log(tasksNum)
      adminTasks.forEach(task => {
        if (task.dateCloture == null) {
          tasksNum++
        }
      })
      console.log(tasksNum)
      res.render('index', {noStocks: noStocks.length, messagesNum: unreadMsgNum, tasksNum: tasksNum})
    })
  })
});

/* GET tasks page. */
router.get('/tasks-page', function(req, res, next) {
  UserModel.findOne({_id: '5c52e4efaa4beef85aad5e52'}, function(err, admin) {
    if (err) return handleError(err)
    res.render('tasks', {tasks:admin.tasks})
  })
});

/* GET Messages page. */
router.get('/messages-page', function(req, res, next) {
  UserModel.findOne({_id: '5c52e4efaa4beef85aad5e52'}, function(err, admin) {
    if (err) return handleError(err)
    res.render('messages', {messages:admin.messages})
  })
});

/* GET Users page. */
router.get('/users-page', function(req, res, next) {
  // callback method
  UserModel.find({ status: 'customer' }, function(err, users) {
    if (err) return handleError(users)
    res.render('users', {users:users});
  })
});

/* GET Catalog page. */
router.get('/catalog-page', async function(req, res, next) {
  var articles = await ArticlesModel.find()
  res.render('catalog', {articles, articles});
});

/* GET Orders-list page. */
router.get('/orders-list-page', async function(req, res, next) {
  var orders = await OrdersModel.find()
  res.render('orders-list', {orders:orders});
});

/* GET Order detail page. */
router.get('/order-page', async function(req, res, next) {
  var myOrder = await OrdersModel.findById(req.query.orderid).populate('articles').exec()
  console.log(myOrder)

  res.render('order', {order:myOrder});
});

/* GET chart page. */
router.get('/charts', function(req, res, next) {
  res.render('charts');
});



module.exports = router;
