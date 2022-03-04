const express = require('express');
const app = express()
const port = process.env.PORT|| 3000;
const path  = require('path')
const hbs = require('hbs');

const statcipath = path.join(__dirname,"../public"); 

const temppath = path.join(__dirname,"../templet/views"); 

const partialpath = path.join(__dirname,"../templet/partials");


app.set('view engine', 'hbs');

app.set('views',temppath);

hbs.registerPartials(partialpath);

app.use(express.static(statcipath)); 


app.get('/' , (req , res)=>{

   res.render('index');

})

app.get('/about' , (req , res)=>{

   res.render("about");

})

app.get('/Weather' , (req , res)=>{

   res.render('weather');

})

app.get('*' , (req , res)=>{

   res.render('404error',{
      ErrorMsg:"Opps! Page Not TO be Find"
   });

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))