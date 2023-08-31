const { Schema, model } = require('mongoose');

// This document defines the schema and model for users for the database.
// I'M USING EMAIL AS THE UNIQUE IDENTIFIER
// interface IUser {
//     userId: String,
//     name: String;
//     email: String;
//     password?: String;
//     data: {
//         website?: String,
//         phone?: String,
//         linkedin?: String,
//         github?: String,
//         twitter?: String,
//         instagram?: String,
//         moreLinks?: Array<String>
//     }
// }

const userSchema = new Schema({
    userId: String,
    name: String,
    email: String,
    password: String,
    data: {
        website: String,
        phone: String,
        linkedin: String,
        github: String,
        twitter: String,
        instagram: String,
        more: [String]
    }
});


const User = model('User', userSchema);

module.exports = { User };



