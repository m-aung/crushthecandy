const path = require("path");
const express = require("express");

const PORT = 3210;

const app = express();

app.use("/build", express.static(path.resolve(__dirname, "../build")));

app.get("/", (req, res) => {
	return res.status(200).sendFile(path.resolve(__dirname, "../index.html"));
});

app.listen(PORT, () => {
	console.log(`listening to port : ${PORT}`);
});
