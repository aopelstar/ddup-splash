module.exports ={

    email: (req, res) => {
        const dbInstance = req.app.get('db');
    
        console.log(req.body);
        const { name, email } = req.body
    
        dbInstance.email([ email, name]).then(response => {
                res.status(200).send(response)
            })
        }
     
    }