const express=require('express');
const app=express();
const path=require('path');
const redittdata=require('./data.json');
// console.log(redittdata);
app.use(express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/rand',(req,res)=>{
    const nums=Math.floor(Math.random()*10)+1;
    res.render('random.ejs',{rand:nums});
})
app.get('/r/:subreddit',(req,res)=>{
    const {subreddit}=req.params;
    const data=redittdata[subreddit];
    if(data){
        res.render('subreddit',{...data});
    }else{
        res.render('notfound',{subreddit});
    }
})

app.get('/flower',(req,res)=>{
    const flowers=['rose','lily','lotus','jasmine']
    res.render('flower.ejs',{flowers});
})
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.listen(3000,()=>{
    console.log("listening")
})