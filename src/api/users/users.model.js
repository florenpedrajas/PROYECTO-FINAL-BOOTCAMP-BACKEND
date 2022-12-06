const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    birthdate: { type: String, required: true },
    rol: { type: String, enum:["admin", "user"], default: "user"},
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    parking: [{type: mongoose.Schema.Types.ObjectId, ref:"parkings", trim: true}],
    photo: { type: String, trim: true, default:"https://www.pngfind.com/pngs/m/16-168603_download-login-icon-svg-hd-png-download.png"},
    bookings: [{type: mongoose.Schema.Types.ObjectId, ref:"bookings", trim:true, unique: true}]
  },
  {
    timestamps: true
  }
);

userSchema.pre("save", function (next) {

    this.password = bcrypt.hashSync(this.password, 10);
    next();

})

const User = mongoose.model('users', userSchema);
module.exports = User;