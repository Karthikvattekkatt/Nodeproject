const express=require('express');
const router=express.Router();
// const data = require('..data.json');
const app=new express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// const arr1=['Adarsh','12','Anjery'];
// const arr2=['Adarsh','12','Anjery'];
// const arr3=['Adarsh','12','Anjery'];
// const arr4=['Adarsh','12','Anjery'];
// data.hospitals.forEach(hospital => {
//     console.log(hospital.name);
//   });  
// router.get('/',(req,res)=>{
//     res.send(data);
// })
// router.post('/add',(req,res)=>{
//     arr1.push('Aswani Hospital');
//     res.send(data);
// })
// module.exports=router