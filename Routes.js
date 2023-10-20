const Routes=require("express").Router()

Routes.get("/details",(req,res)=>{
    res.send(
        "<h1>What is express :<h3> Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</h3></h1>"
    )
})
module.exports=Routes