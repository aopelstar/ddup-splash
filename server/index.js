const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const massive = require ('massive');
const controller = require ('./controller/postemail')
require('dotenv').config()


const app = express();
app.use( bodyParser.json())
app.use( cors());

app.use( express.static( `${__dirname}/../build` ) );


massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})
app.post('/api/getemail', controller.email)


const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})