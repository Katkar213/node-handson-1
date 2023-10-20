console.log("hello")

// Handson1..........................
const http=require("http");
const data=require("./json")
const resultdata=JSON.stringify(data);

http.createServer((req,res)=>{
  if(req.url=="/nodejs"){
    res.write("<h1>What is Nodejs</h1>")
    res.write("<p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>")
   res.end();
}
else if(req.url=="/json"){
res.write(resultdata);
res.end();
}
}).listen(4000,()=>{
    console.log("ended")
})

// Handson2..........................................
const Routes=require("./Routes")

const express=require("express")
const app=express();
app.use("/route/api/main",Routes)

app.listen(4001,()=>{
  console.log("express routes")
})
