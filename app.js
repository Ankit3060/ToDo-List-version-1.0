const express = require("express");
const bodyParser = require("body-parser");

//connecting the Java Script
const date = require(__dirname + "/date.js");

const app = express();

//This is for using body-parser 
app.use(bodyParser.urlencoded({extended:true}));

//to use CSS and JS
app.use(express.static("public"));

//connecting embeded java script EJS
app.set('view engine', 'ejs');

let workItems = [];
let items=[];

// this is main function for the home route 
app.get("/",function(req,res)
{
    let day = date.getDate; 
    res.render("list",{listTitle : day , newListItems : items}); 
    console.log(day); // शनिवार, 17 सितंबर 2016

});

// this is post function of all the route 
app.post("/",function(req,res)
{
    let item = req.body.newItem;
    if(req.body.list == "Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});


// This is work route 
app.get("/work",function(req,res)
{
    res.render("list",{listTitle : "Work List" , newListItems : workItems});
});


// This is about route 
app.get("/about",function(req,res)
{
    res.render("about");
});


// Connecting to server 
app.listen(3000, function()
{
    console.log("Server has started");
});