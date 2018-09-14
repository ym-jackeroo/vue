var express = require('express');
var router = express.Router();

const users = [
  {
    username:'诸葛钢铁',
    password: '654321'
  },
  {
    username:'马冬梅',
    password:'123456'
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',(req,res)=>{
  const {username, password} = req.body
  let loginSuccess = false
  console.log(username, password)
  
  users.forEach(item => {
    if(item.username === username && item.password === password){
      loginSuccess = true
    }
  })
  if(loginSuccess){
    res.json({
      code:200,
      msg: '登录成功'
    })
  }
})

router.get('/demo2', (req, res) => {{
  res.json({
    msg: "嘟嘟嘟嘟嘟",
    code: 200
  })
}})



module.exports = router;
