

module.exports ={

    email: (req, res, nest) =>{
        console.log(req.body);
        const dbInstance = req.app.get('db');
        
        const { name, email } = req.body
        
        dbInstance.email([email, name])
        .then(response => {
            res.status(200).send(response)
        }).catch( (error) => {
            console.log(error)
            res.status(500).send(error);
        })
    }

     
    }