var express = require('express');
var router = express.Router();
var http = require('http');
var proxy = require('http-proxy-middleware');

router.use('/api', proxy({
  target: 'http://localhost:3000',
  changeOrigin: true,
  pathRewrite: {
    '/api': '/'
  }
}));

// var cors = require('cors')

// const corsOptions = {
//   origin: 'http://localhost:8080',
//   credentials:true
// }
// router.use(cors(corsOptions))



/* GET home page. */
// router.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   res.header('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS')
//   res.header('Access-Control-Allow-Credentials', true)
//   next()
// })

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getJsonp', (req, res) => {
  res.jsonp({
    data: '一些信息',
    msg: '抽烟喝酒烫头',
    code: 200
  })
})

router.get('/getMsg', (req,res) => {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:8080')

  res.json({
    data: '一些信息',
    msg: '抽烟喝酒烫头',
    code: 200
  })
})

// router.options('/noSimple', (req, res) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Content-Type')
//   res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS,PUT')
//   res.send()
// })

router.post('/noSimple',(req, res) => {
  //res.header('Access-Control-Allow-Origin', 'http://localhost:8080')

  res.json({
    data: '一些信息',
    msg: '抽烟喝酒烫头',
    code: 200
  })
})

router.get('/proxy', (req, response) => {
  http.get('http://localhost:3000/demo2', function(res){
    // console.log(res)
    let rawDate = ''
        res.on('data', (chunk) => {
          rawDate += chunk;
        });
        res.on('end', ()=> {
          try {
            const parsedData = JSON.parse(rawDate);
            console.log(parsedData);
            response.json(parsedData)
          } catch (e) {
            console.log(e.message);
          }
        });
  })
  
})

module.exports = router;
