const express = require("express");
const app = express();
app.use(express.static("public"));

app.set("view engine", "ejs");


    app.get("/Vova", (req, res) => {
    res.render("index", { name: "Вова", img: "/images/V.jpg", description:"Maecenas at orci nec sem malesuada hendrerit vitae eu tellus. Morbi nec nisl libero. Quisque quam ligula, sodales ut velit et, malesuada sollicitudin felis. Fusce sed pretium arcu, eu convallis enim. Mauris vel ante sed felis tincidunt eleifend. Nunc ornare viverra magna. Sed sit amet mollis ligula."});
    });

    app.get("/Anya", (req, res) => {
    res.render("index", { name: "Аня", img: "/images/A.jpg", description:"Maecenas at orci nec sem malesuada hendrerit vitae eu tellus. Morbi nec nisl libero. Quisque quam ligula, sodales ut velit et, malesuada sollicitudin felis. Fusce sed pretium arcu, eu convallis enim. Mauris vel ante sed felis tincidunt eleifend. Nunc ornare viverra magna. Sed sit amet mollis ligula."});
    });

    app.get("/Tanya", (req, res) => {
    res.render("index", { name: "Таня", img: "/images/T.jpg", description:"Maecenas at orci nec sem malesuada hendrerit vitae eu tellus. Morbi nec nisl libero. Quisque quam ligula, sodales ut velit et, malesuada sollicitudin felis. Fusce sed pretium arcu, eu convallis enim. Mauris vel ante sed felis tincidunt eleifend. Nunc ornare viverra magna. Sed sit amet mollis ligula."});
    });


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/main.html");

});

app.listen(3001, () => {
    console.log("Сервер запущено на http://localhost:3001");
});