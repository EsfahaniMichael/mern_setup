const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/test', (req, res) => {
   res.send('<h1>THis is a test route, and it is working</h1>');
});

app.listen(PORT, () => {
    console.log('Serve running on PORT' + PORT);
});

