const express=require("express")
const app=express()
const PORT=8080
const path = require("path")
const filePath= path.join(__dirname,"index.ejs")
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    let name="Sam"
    const now = new Date(Date.now());
    const hours = now.getHours();
    let place="Bengaluru"
    res.render(filepath,{name,destination:place})
})
app.listen(PORT,(err)=> {
    if(err){
        console.log("err",err)
    }
    else(
        console.log(`Listening on PORT ${PORT}`)
    )
})