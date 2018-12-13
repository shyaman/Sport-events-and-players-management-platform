const express  = require('express');
const router = express.Router();

    
    router.get("/matches",function(req,res){
        
        res.end("No matches!");
               
    });

    module.exports = router;