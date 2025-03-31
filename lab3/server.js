import express from "express";
import router from "./Router.js";
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(router)
const __dirname = path.resolve()
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'MainPage.html'));
})

app.listen(3002, () =>{
    console.log("Сервер запущено  на http://localhost:3002")
})

