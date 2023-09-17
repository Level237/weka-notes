const app=require('./src/index')
const port=process.env.PORT


app.listen(port,()=>{
    console.log("port listening in"+port);
})

// exporting app for the test route


