const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:true,
        unique: true,
        minlength: 3,
        maxlength: 30,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    }
});

userSchema.pre('save', async function (next) {
    if(!this.isModiified('password'))return next();
    
    const salt = await bcrypt.genSait(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();

});

userSchema.methods.matchmatchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    
};

const User = mongoose.model('User' , userSchema);
module.exports = User ;