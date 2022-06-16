const { Router } = require('express');
const express = require('express');
const app = express();
const route = Router();

app.set("port", process.env.PORT | 3000);

route.get('/', (req, res) => {
    res.send("hola mundo");
});

app.listen(app.get('port'), () => { console.log(`server is online in port ${app.get('port')}`); });