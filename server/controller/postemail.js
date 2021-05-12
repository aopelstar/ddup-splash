module.exports ={

        getemail: (req, res) =>{
            const db= req.app.get("db");

            const { name, email } = req.body;
                
            db.whatevs( [ name, email ])
            .then(response =>{
                res.status(200).send(response)
            }).catch( (error) =>{
                console.log(error);
                res.status(500).send(error)
            })
        }

     
    }