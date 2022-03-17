const express = require('express');
const app = express();
const port = 5000;

// allowing the app to use our static files
app.use("/static", express.static("public"))
app.use("/css", express.static("public/css"));


// backticks used in console as a tmplate literal - $string used
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});