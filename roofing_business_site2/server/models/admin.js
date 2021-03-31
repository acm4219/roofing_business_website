import mongoose from "mongoose";
import bcrypt from "bcrypt";
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true, 
        index: {
            unique: true
        }
    },
    hashed_password: {
        type: String,
        default: ''
    }
});

UserSchema
    .virtual('password')
    .set(function(password) {
        this._password = password;
    });

UserSchema.pre("save", function(next) {
    const user = this;
    if (user._password === undefined){
        return next();
    }
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if(err) console.log(err);
        bcrypt.hash(user._password, salt, function(err, hash){
            if(err) console.log(err);
            user.hashed_password = hash;
            next();
        });
    });
});

UserSchema.methods = {
    comparePassword: function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
            if (err) return cb(err);
            cb(null, isMatch);
        });
    }
};

const admin = mongoose.model('User', UserSchema);

export default admin;