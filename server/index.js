const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
	res.send('Hello World ddd');
});

app.listen(port, () => {
	console.log(`Server app listening on port ${port}`);
});
