const express = require('express');
const app = express();
const routes = require('./routes/');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/v1/', routes);

app.use((req, res, next) => {
    let error = new Error("This is an error. You should not see this");
    error.status = 404;
    next(error)
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: "Whoopsy Daisy",
        error: error.message
    });
});

app.listen(4200, () => {
    console.log(`listening on port 4200`);
});