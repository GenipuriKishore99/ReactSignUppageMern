var express=require("express");
var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;
var url="mongodb://127.0.0.1:27017";
var app=express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("<h3>server running</h3>")

// })

// app.get("/connect",(req,res)=>{
//     mongoClient.connect(url)
//     .then(()=>{
//         res.send("connected")

//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })

app.get("/user",(req,res)=>{
    mongoClient.connect(url)
    .then((obj)=>{
        var database=obj.db("employees")
        database.collection("registeruser").find({}).toArray().then((docu)=>{
            res.send(docu)
            res.end();
        })
        .catch((err)=>{
            console.log(err)
        })
    })
})

app.post("/customerregister",(req,res)=>{
    var userInfo={
        "FullName":req.body.FullName,
        "Email":req.body.Email,
        "UserName":req.body.UserName,
        "Password":req.body.Password,
        "RepeatPassword":req.body.RepeatPassword

    }
    mongoClient.connect(url)
    .then((obj)=>{
        var database=obj.db("employees")
        database.collection("registeruser").insertOne(userInfo)
        .then(()=>{
            res.redirect("/user")
        })

    })
})
app.listen(5000);
console.log(`server running :http://127.0.0.1:5000`)