const router = require('express').Router();

const repoUsers = require('../repositories/users');

router.get('/', (req, res) => {
    try {
        let users = repoUsers.getAll();

        if (req.query.fields != null ) {
            const fields = req.query.fields.split(",");

            if(fields.includes('posts')){
                console.log("incluye posts");
            }
            
        } else {
            console.log("siento todo irreal");
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(501).send(error.message);
    }
});

module.exports = router;
