const mongoose = require("mongoose");
const dbHOST = process.env.DBHOST;


mongoose.connect(dbHOST)
.then(()=>{
    console.log('MongoDB Connected')

}).catch((err)=>{
    console.log("DB connection error",err)
})