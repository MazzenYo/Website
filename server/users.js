const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
            validate: [(isEmail), 'Please enter a valid email']
        },
        password: {
            type: String,
            required: [true, 'bitte ein Passwort eingeben'],
            minLength: [6, 'Passwort muss mindesten 6 Zeichen haben'],
        }

    },
    {collection: 'users'}
)

userSchema.virtual('id').get(function () {
    return
})