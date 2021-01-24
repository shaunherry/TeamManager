const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Name is required"],
        minlength:[3, "must be 3 letters"]
    },
    position:{
        type: String,
        required:[true,"Position is required"],
        minlength:[3, "must be 3 letters"]
    }
    
    
}, {timestamps:true})

mongoose.model('Team', TeamSchema);
