// require('dotenv').config({path:"./env"});

import dotenv from "dotenv";
// import { connectDB } from "./db/index.js";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("MongoDB connection failed !!!! ", error)
})









// import express from "express"
// const app = express();

// //we are calling function directly after declaration
// ;( async() => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         //using express 
//         app.on("error", (error) => {
//             console.log("Errror: ", error);
//             throw error
//         });

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listning on port ${process.env.PORT}`)
//         });


//     } catch (error) {
//         console.error("Error: ", error)
//         throw error
//     }
// })()
