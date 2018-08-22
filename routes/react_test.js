var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/test1', function(req, res, next) {
  //res.send('respond with a resource');
    console.log("test1");
    res.render("../views/test1.html");

});


router.get('/test2', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test2");
    res.render("../views/test2.html");

});


router.get('/test3', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test3");
    res.render("../views/test3.html");

});


router.get('/test4', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test4");
    res.render("../views/test4.html");

});


router.get('/test5', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test5");
    res.render("../views/test5.html");

});

router.get('/test6', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test6");
    res.render("../views/test6.html");

});

router.get('/test7', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test7");
    res.render("../views/test7.html");

});


router.get('/test8', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test8");
    res.render("../views/test8.html");

});


router.get('/test9', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test9");
    res.render("../views/test9.html");

});


router.get('/test10', function(req, res, next) {
    //res.send('respond with a resource');
    console.log("test10");
    res.render("../views/test10.html");

});

module.exports = router;
