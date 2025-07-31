import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
app.use(express.static("public")); // Add dynamic styles and layouts to the public folder
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

/**
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/login", (req, res) => {
    if (authenticated) {
        res.sendFile(__dirname + "/index.html");
    } else {
        res.sendFile(__dirname + "/landing.html");
    }
});
*/

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});