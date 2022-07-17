const mongoose = require("mongoose")

const URL = `mongodb+srv://PRPS:Robust2120@cluster0.9ip3moi.mongodb.net/Resume`

mongoose.connect(
    URL, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );


  const db = mongoose.connection;

  db.on("connected", ()=>{
    console.log("Mongo DB connected successfully");
  });

  db.on("error", (error)=>{
    console.log(error);
  });

//   db.on("error", console.error.bind(console, "connection error: "));
//   db.once("open", function () {
//     console.log(" mongo db Connected successsssss yeaahhh");
//   });