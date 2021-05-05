const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const massive = require ('massive');
require('dotenv').config()


const app = express();
app.use( bodyParser.json())
app.use( cors());

app.use( express.static( `${__dirname}/../build` ) );



massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    }).catch(function(err) {
        console.log('error: ', err);
    });
app.post('/api/getemail', (req, res, nest) =>{
    const db = req.app.get('db');
    const { email, name } = req.body

    db.email([ email, name]).then(response => {
            res.status(200).send(response)
        })
})


const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})