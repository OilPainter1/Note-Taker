const express = require("express")
const { get } = require("http")
const path = require("path")
const fs = require('fs')
const app = express()
const port = 3002

app.use(express.static("/Users/henrycryns/Desktop/Note-Taker/Develop/public/assets/css/styles.css"))

app.get("/",(req,res)=>{
    res.sendFile("/Users/henrycryns/Desktop/Note-Taker/Develop/public/index.html")
    res.end
    
})
app.get("/notes", (req,res)=>{
    res.sendFile("/Users/henrycryns/Desktop/Note-Taker/Develop/public/notes.html")
    res.end
})
app.get("/api/notes", (req,res)=>{
    res.json(JSON.parse(fs.readFileSync("/Users/henrycryns/Desktop/Note-Taker/Develop/db/db.json","utf-8",(err,data)=>{
        if(err){
            console.log(err)
            return
        }else{
            return data
        }
    })))
})
app.get("*", (req,res)=>{
    res.sendFile("/Users/henrycryns/Desktop/Note-Taker/Develop/public/index.html")
    res.end
})

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
    
})