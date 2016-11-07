var express = require('express');
var router = express.Router();
var dataMani=require('../component/dataManipulation.js');
var ObjectId = require('mongodb').ObjectID;


/* GET home page. */


router.get('/list/selectAll', function(req, res, next) {
  dataMani.selectall('list', function(result) {
      //res.json(result);
      res.send(result);
  });
});

/*  插入数据  */
router.get('/list/insert', function(req, res, next) {
  var data=JSON.parse(req.query.data);
  dataMani.insert('list',data,function(result){
    res.send(result);
  })
})

/*  更新列表  */
router.get('/list/update', function(req, res, next) {
  var data=JSON.parse(req.query.data);
  dataMani.update('list', data[0], data[1], function(result){
   res.send(result);
  })
});

/*  查询所有用户的接口  */
router.get('/user/selectAll', function(req, res, next) {
  dataMani.selectall('user', function(result) {
      //res.json(result);
      res.send(result);
  });
});

/*  按商品id查询  */
router.get('/user/getByUsername', function(req, res, next) {
  dataMani.select('user', {"username": req.query.username}, function(result) {
      res.send(result);
  });
});

/*  按商品type查询  */
router.get('/user/getByType', function(req, res, next) {
  dataMani.select('user', {"type": req.query.type}, function(result) {
      res.send(result);
  });
});

/*  插入数据  */
router.get('/user/insert', function(req, res, next) {
  // var data={
  //   "username":"dushao",
  //   "type":"02",
  //   "password":"abc123"
  // };
  var data=JSON.parse(req.query.data);
  dataMani.insert('user',data,function(result){
    res.send(result);
  })
})

/*  按用户名删除  */
router.get('/user/delectByUsername',function(req, res, next) {
  dataMani.remove('user',{"username":req.query.username},function(result){
   res.send(result);
  })
})

/*  按商品type删除  */
router.get('/user/delectByType',function(req, res, next) {
  dataMani.remove('user',{"type":req.query.type},function(result){
   res.send(result);
  })
})

/*  全部删除  */
router.get('/user/delectAll', function(req, res, next) {
  dataMani.removeall('user',function(result){
    res.send(result);
  })
});

/*  更新用户  */
router.get('/user/update',function(req, res, next) {
  var data=JSON.parse(req.query.data);
  // {"username":"zzg","type":"01","password":"abc321"}
  dataMani.update('user', data[0], data[1], function(result){
   res.send(result);
  })
})



/*  查询所有商品的接口  */
router.get('/good/selectAll', function(req, res, next) {
  dataMani.selectall('good', function(result) {
      //res.json(result);
      res.send(result);
  });
});

/*  按商品id查询  */
router.get('/good/getById', function(req, res, next) {
  dataMani.select('good', {"_id": ObjectId(req.query.id)}, function(result) {
      res.send(result);
  });
});

/*  按商品type查询  */
router.get('/good/getByType', function(req, res, next) {
  dataMani.select('good', {"type": req.query.type}, function(result) {
      res.send(result);
  });
});

/*  插入数据  */
router.get('/good/insert', function(req, res, next) {
  // var data={
  //   "id":"0102",
  //   "type":"02",
  //   "title":"梨"
  // };
  var data=JSON.parse(req.query.data);
  dataMani.insert('good',data,function(result){
    res.send(result);
  })
})

/*  按商品id删除  */
router.get('/good/delectById',function(req, res, next) {
  dataMani.remove('good',{"id":req.query.id},function(result){
   res.send(result);
  })
})

/*  按商品type删除  */
router.get('/good/delectByType',function(req, res, next) {
  dataMani.remove('good',{"type":req.query.type},function(result){
   res.send(result);
  })
})

/*  全部删除  */
router.get('/good/delectAll', function(req, res, next) {
  dataMani.removeall('good',function(result){
    res.send(result);
  })
});

/*  更新商品  */
router.get('/good/update',function(req, res, next) {
  var data=JSON.parse(req.query.data);
  // {"id":"0110","type":"03","title":"香蕉"}
  dataMani.update('good', data[0], data[1], function(result){
   res.send(result);
  })
})



// router.post('/')

module.exports = router;
