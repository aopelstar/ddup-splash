require('dotenv').config()
const express = require ('express');
const massive = require ('massive');
const controller = require ('./controller/postemail');



const app = express();
massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('connected to db')
}).catch(err=>console.log(`database error: ${err}`))

app.use( express.json())

app.use( express.static( `${__dirname}/../build` ) );




app.post('/api/getemail', controller.getemail)


const port = process.env.SERVER_PORT || 5432
app.listen(port, ()=> {
    console.log(`listening on port ${port}`)
})