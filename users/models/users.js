const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the schema
const UsersSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }, 
    mobile_number: {
        type: String
    }, 
    city: {
        type: String
    },
    zipcode: {
        type: String
    }
});

//create the model based on schema
const user = mongoose.model("user", UsersSchema);

module.exports = user;