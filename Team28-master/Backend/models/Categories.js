var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CategorySchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  
});
var CategoryServices = mongoose.model('Category', CategorySchema);
module.exports = CategoryServices;