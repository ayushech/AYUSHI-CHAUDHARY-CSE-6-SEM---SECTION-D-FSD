const express=requie('express');
const app= express();
const port=8080;

//Middleware to parese JSON request bodies
app.use(exoress.json());

//Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({extended:true
}));

//Middleware to serve static files from a directory
app.use(express.static('public'));


//Post route that uses JSON middleware
app.post('/api/users',(req,res)=>{
    //req.body contains the parsed JSON data
    console.log(req.body);
    res.status(201).json({message: 'User cretaed',user: req.body});
});

app.listen(port, ()=>{
    console.log(`Example app listening at http://loacalhost${port}`);
});

