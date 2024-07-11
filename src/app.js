const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('<p>Hello world!<p/>');
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
