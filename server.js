const express = require("express")
const { get } = require("http")
const path = require("path")
const fs = require('fs')
const shortID = require("shortid")
const app = express()
const port = 3002
const jsonNotes = require("./db/db.json")

app.use(express.static("public"))
app.use(express.json())

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
   
    
})

app.get("/notes", (req,res)=>{
    res.sendFile(path.join(__dirname,"public","notes.html"))
    
})
app.post("/api/notes", (req,res)=>{
    if (!req.body){
        res.status(400).send("Empty note")
    }
    else
    console.log(req.body)
    req.body.id = shortID.generate()
    jsonNotes.push(req.body)
    console.log(jsonNotes)
    fs.writeFileSync(path.join(__dirname,"db","db.json"),JSON.stringify(jsonNotes))
    res.send("done")

})

app.get("/api/notes", (req,res)=>{
    
    res.json(JSON.parse(fs.readFileSync(path.join(__dirname,"db","db.json"),"utf-8")))
})

//app.post("/api/notes",(req,res)=>{
    //console.log(req)
    //res.end
//})

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
    res.end
})



app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
    
})