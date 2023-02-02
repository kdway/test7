
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,

        },
        email:{
            type: String,
            required: true, // must fill obligation
            unique: true// deferent content
        },

       pwd:{
            type: String,
            required: true,
            
        }
    },
    {timestamps: true}
)
module.exports = mongoose.model("Contact" , ContactSchema);
