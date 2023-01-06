const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./src/routes/userRoute');
const commentRoute = require('./src/routes/commentRoute');
const articleRoute = require('./src/routes/articleRoute');
require('dotenv').config()

const app = express()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/user", userRoute);
app.use("/api/comment", commentRoute);
app.use("/api/article", articleRoute)


//db connection
mongoose.connect('mongodb://localhost:27017/MileStone3')
.then(() => console.log('DB connected'))
.catch(err => console.error(err));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
console.log('cors connected')
