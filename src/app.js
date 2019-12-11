const express = require('express');
const app = express();
const routes = require('./routes');


//config env
const port = process.env.PORT || 3000;

//config routes
app.use(routes);


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})