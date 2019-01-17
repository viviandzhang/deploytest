// dependencies
const express = require('express');
//const connect = require('connect-ensure-login'); }authentication??

// models
const Dilemma = require('../models/dilemma');
//const Comment = require('../models/comment');

const router = express.Router();

// get Dilemmas:
router.get('/dilemmas', function(req, res) {
    Dilemma.find({}, function(err, dilemmas) {
        res.send(dilemmas);
    });
});


// user/authentication stuff- don't completely understand
//make/whoam i route return get user 
router.get('/whoami', function(req, res) {
  
    if(req.isAuthenticated()){
      res.send(req.user);
    }
    else{
      res.send({});
    }
  });
  
  
 router.get('/user', function(req, res) {
    res.send({
        name: 'Anonymous',
        _id: 'anonid',
        adjective: 'angry',
        color: 'Anon was here',
      
      
    });
  });


router.post('/dilemma', function(req, res) {
    const newDilemma = new Dilemma({
        'creator_id'        : 'anon_id',
        'creator_name'      : 'anon',
        'creator_alias'     : 'Anon',
        'timestamp'         : null,
        'categories'        : ['Uncategorized'],
        'title'             : req.body.title,
        'body'              : req.body.body,
        'active'            : true,
        'votes_yes'         : 3,
        'votes_no'          : 4
    });
    newDilemma.save(function(err, dilemma) {
        if (err) console.log(err);
    });
    res.send({});
});

module.exports = router;
