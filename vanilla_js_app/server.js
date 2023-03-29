const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static(__dirname));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT);
