const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000

app.use(express.json());

const postRoutes = require("./routes/blog");
app.use("/api/v1",postRoutes);

const connectwithDB = require("./config/database");
connectwithDB();

app.listen(port , ()=>{
   console.log(`Server is running on port ${port}`);
})

app.get("/" , (req,res)=>{
   res.send(`<h1>This is the Blog app brother</h1>`)
})