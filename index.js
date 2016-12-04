var express = require('express');
var path = require('path');
var app = express();

app.set("view engine","ejs");
//동적 페이지를 위한 ejs설정
//ejs는 require이 필요없다

app.use(express.static(path.join(__dirname+'/public')));
//__dirname is access (경로), path를 쓰면 /를 무시해서 오류확률을줄임

//동적 페이지 추가//
var data={count:0};
app.get('/',function(req,res){
  data.count++;
  res.render('my_fisrt_ejs',data);
});// '/'루트에서 get신호가 오면 data 오브젝트에
//    count값을 1 증가시키고, my_fisrt_ejs를 render하는데,
//    data 오브젝트를 넣어서 render하여 응답합니다.

app.get('/reset',function(req,res){
  data.count=0;
  res.render('my_fisrt_ejs',data);
});// '/reset'루트에서 get신호가 오면 0으로

app.get('/set/count',function(req,res){
  if(req.query.count) data.count =req.query.count;
  res.render('my_fisrt_ejs',data);
});// '/set/count'루트에서 get신호가 오면
//request에 count query가 있는지 확인하고, 있으면 그 값을 data.count에 대입.
//주소?id = myid&email=myemailaddress 값처럼 서버에서 받는것

app.get('/set/:num',function(req,res){
  data.count = req.params.num;
  res.render('my_fisrt_ejs',data);
});// '/set/:num'처럼 루트에 콜론(:)이 오면 이는 placeholder가 됩니다.
//주소줄의 변수선언이라 생각하면 된ㄴ다. 아무값이나 들어갈 수 있으며,
//이 값은 request의 parameter로 저장됩니다.

//


app.get('/',function(req,res){
  res.render('my_fisrt_ejs');
});


app.listen(3000,function(){
  console.log('Server On!');
});
