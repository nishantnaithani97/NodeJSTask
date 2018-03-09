let mongooseDB = require('mongoose');
let Schema = mongooseDB.Schema;
let TaskSchema = new Schema({
    Username: {type: String, required: true, unique: true} ,
    Email : {type: String, required: true, unique: true},
    Name : {type: String, required: true, unique: true}
});
module.exports = mongooseDB.model('task1Collection', TaskSchema);