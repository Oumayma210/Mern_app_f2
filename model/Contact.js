const mongoose = require("mongoose");
const { Schema } = mongoose;
const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: { type: String, unique: true, required: true },
    age: Number,
});
module.exports = Contact = mongoose.model("contact", contactSchema);
