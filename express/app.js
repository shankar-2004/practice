const express = require('express');
// const http = require('http');
const app = express();
const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop')
const bodyParser = require('body-parser');
const path = require('path');
app.use(bodyParser.urlencoded())


// app.use((req,res,next)=>{
//     console.log("Second Middleware");
//     res.send({"some":"shankaran"})
// });
// const server = http.createServer(app);

// server.listen(3000);

app.use(adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname,'public')))
// app.use((req,res,next)=>{
//     res.status(404).send('<h1>404 page not found</h1>');
    
// })


app.listen(3500);