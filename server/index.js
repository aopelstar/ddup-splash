const express = require ('express');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const massive = require ('massive');
const controller = require ('./controller/postemail')
require('dotenv').config()
const pgp = require( 'pg-promise')({});


const app = express();
app.use( bodyParser.json())
app.use( cors());

app.use( express.static( `${__dirname}/../build` ) );


const db = pgp(process.env.CONNECTION_STRING);
app.post('/api/getemail', (req, res) =>{
    console.log(req.body);
    
    const { name, email } = req.body
    db.one( 'INSERT INTO email_db(email, email_name) VALUES($1 $2)', [email, name])
    .then(response => {
        res.status(200).send(response)
    }).catch( (error) => {
        console.log(error)
        res.status(500).send(error);
    })
    
})


const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})