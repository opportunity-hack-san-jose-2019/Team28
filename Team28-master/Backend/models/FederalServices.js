var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FederalSchema = new Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  Location: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  Description: {
    type: String,
    required: true,
  },
  URL : {
    type : String,
    required : true
  },
  Category : {
      type : String,
      require:true
  }
});
var FederalServices = mongoose.model('FederalService', FederalSchema);
module.exports = FederalServices;