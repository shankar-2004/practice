import express from "express";

const app = express();

app.use(express.json());

app.use(express.json());
const mockUsers =[
    {id:1,thing:"chickenbrest",rate:30},
    {id:2,thing:"shankar",rate:30},
    {id:3,thing:"chickenbrest",rate:30}
]
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log("server is starting from ",port);
})

// app.get("/api/users",(req,res) => {
//     console.log(req.query);
// });

// app.get("/api/products", (req, res) => {
//     const shankar = mockUsers.filter((user) => {
//         return user["thing"].includes("shankar");
//     });
//     res.send(shankar);
// });



// app.post("/api/users",(req,res) =>{
//     console.log(req.body);
//     return res.send(200);
// });
app.get('/api/users/:id',(req,res)=>{
    console.log(req.params);
    const parsedId = parseInt(req.params.id);
    console.log(parsedId);
    if(isNaN(parsedId)) return response.status(400).send({msg:"bad request"});

    const findUser = mockUsers.find((user) =>{
        return user.id == parsedId
    });

    if(!findUser) return res.send("user not here");
    return res.send(findUser);
});

app.get('/api/users',(request,response) =>{
    console.log(request.query);
    const  {filter,value} = request.query;
    if(!filter && !value ) return response.send(mockUsers);
    if(filter && value) {
        return response.send(mockUsers.filter( user =>{
            return user[filter].includes(value);
        }));
    }
    return response.send({1:"bad request"});
})


app.get("/",(req,res,next)=>{
    res.status(201).send("hi bro");
})

app.get("/api/getAllUsers",(request,response)=>{
    console.log(mockUsers);
    return response.status(200).send(mockUsers);
});

app.put("/api/users/:id",(req,res)=>{
    const {body,params:{id}} = req;
    console.log(params.id);
    const parsedId = parseInt(id);
    if(isNaN(parsedId)) return res.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) =>{
        return user.id === parsedId
    });

    if(findUserIndex === -1) return res.sendStatus(400);
    mockUsers[findUserIndex] = {
        id:parsedId, ...body
    }
    return res.sendStatus(200);
});
app.post("/api/users",(request,response) =>{
    console.log(request.body);
    const {body} = request;
    const newUser = { id: mockUsers[mockUsers.length - 1].id +1 , ...body };
    mockUsers.push(newUser);
    return response.send(200);
});