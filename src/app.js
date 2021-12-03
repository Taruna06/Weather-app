const express = require ("express");
const app = express();
const port = process.env.PORT || 8000; 
//agar 8000 par nahi chala toh kahi aur
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));



// app.get(route, callback)
app.get("",(req,res)=>{
    res.render('index');
})

app.get("/weather", (req,res)=>{
    res.render('weather');
})

app.get("*", (req,res)=>{
    res.render('error');
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
})