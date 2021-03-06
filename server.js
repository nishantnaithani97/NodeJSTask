let express    = require('express');     
let app        = express();                
let bodyParser = require('body-parser');
let mongoose   = require('mongoose');
let Task     = require('./app/models/Task1');
mongoose.connect('mongodb://localhost:27017/task-db');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;  

let router = express.Router();    

router.use(function(req, res, next) {

    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/task')
.post(function(req, res) {
    console.log('save task')
    let task = new Task();
    task.Username = req.body.Username;
    task.Email = req.body.Email;
    task.Name = req.body.Name;  
    task.save(function(err, result) {
    console.log('save task1');    
        if (err)
            res.json({status : 'ok', error : 'Nhi hoga na bhai'});
        else
        res.json({ status : 'ok', data : result._id });
    });

})
.get(function(req, res) {
    Task.find(function(err, task) {
        if (err)
            res.send(err);

        res.json(task);
    });
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);