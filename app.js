import express from "express";
import cors from "cors";
import path from "path";
import helmet from "helmet";


const app = express();


app.use(cors());
app.use(express.json());

const __dirname = path.resolve();

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

// middleware not found page
app.use('*', (req, res, next) => {
    res.status(400).sendFile(path.join(__dirname,'errorpage.html'))
})


app.listen(3000, () => {
    console.log("Server started on port 3000");
})