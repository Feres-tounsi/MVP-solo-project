const express = require('express');
const db = require("./db/index.js")
const app = express();
const cors =require("cors")
const path = require('path');



app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));



   app.get('/grocery',(req,res)=>{
    db.query('SELECT * FROM groceryList', function(err,result){
     if(err){
     console.log(err)}
     res.send(result)
    })
 }
 )

 app.post('/grocery',(req,res)=>{
    db.query(`INSERT INTO groceryList (name ,description) VALUES ("${req.body.name}","${req.body.description}")`,
    (err,result)=>{
      if (err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  })

  app.delete('/grocery/:id',(req,res)=>{
    console.log(req.params)
    db.query(`DELETE FROM groceryList WHERE id=${req.params.id}`,(err)=>{
      if (err){
        console.log(err)
      }else{
        res.send("deleted")
        console.log("deleted")
      }
    })
  })
  
  app.put('/grocery/:id',(req,res)=>{
    const {body} = req
    db.query(`UPDATE groceryList SET name ="${body.name} ",description="${body.description}" WHERE id=${req.params.id}`,(err)=>{
      if (err){
        console.log(err)
      }else{
        res.send("updated")
      }
    })
  })

  const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});