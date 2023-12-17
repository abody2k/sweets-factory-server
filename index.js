let express = require("express")
let app = express()

app.use(express.json())
app.use(require("cors")())
var admin = require("firebase-admin");

var serviceAccount = require("./sweets-factory-95a6a-firebase-adminsdk-j4xsm-dfa1e65ace.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


app.post("/notifyme",(req,res)=>{
    console.log("arrived here");
    console.log(req.body);
    admin.app().messaging().send({data:{},notification:{title:"hello there",body:"hola hola"},token:req.body.token})
    

});

app.listen(3000,()=>{console.log("App is running")})