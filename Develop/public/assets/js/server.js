const express = require("express")
const path = require("path")
const app = express()
const port = 3002

app.get("/",(req,res)=>{
    res.sendFile("/Users/henrycryns/Desktop/Note-Taker/Develop/public/index.html")
    res.end
    
})
app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
    
})