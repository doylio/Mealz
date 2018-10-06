const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './Public/index.html'));
});

app.listen(3000, () => console.log("Listening on Port 3000..."));