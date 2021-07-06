const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');

const userSchema = new.mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: {
        type: Array,

    }
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Unable to login');
    };

    const passwordsMatch = await bycrypt.compare(password, user.password)
    if (!passwordsMatch) {
        throw new Error('Unable to login');
    }

    return user;
};

userSchema.methods.generateAuthToken = aync function () {
    const token = jwt.sign({_id: this.id}, process.env.SECRET, {});
    this.tokens.push(token);
    return token;
};

const User = mongoose.model('User', userSchema);


// Able to export multiple schema within the curly brackets
module.exports = {
    User
};