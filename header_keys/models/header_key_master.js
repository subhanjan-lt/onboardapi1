const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creating header_key_master schema
const HeaderKeyMasterSchema = new Schema({
    valid_key: {
        type: String,
        require: [true, "Key is required"]
    }
});

const headerkeys = mongoose.model("headerkeys", HeaderKeyMasterSchema);
module.exports = headerkeys;