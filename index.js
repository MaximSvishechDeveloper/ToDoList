import express from "express";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
const port = 3000;
let arrayToday = [];
let arrayWork = []


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())



app.get("/", (req, res) => {
  res.render("index.ejs", {
    itemsNew: arrayToday,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    itemsNew: arrayWork,
  });
});

app.post("/", (req, res) => {
  const value = req.body["newItem"]; 
  arrayToday.push(value);

  res.redirect("/")
});

app.post("/work", (req, res) => {
  const value = req.body["newItem"]; 
  arrayWork.push(value);

  res.redirect("/work")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
