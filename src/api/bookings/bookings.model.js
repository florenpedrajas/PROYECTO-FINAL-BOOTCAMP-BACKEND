const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bookingsSchema = new Schema(
  {

    checkin: {type:String , require: false},
    checkout:  {type:String, require: false},
    adress:{type:String, required: true},
    user: {type:String, require: false},

  
  },
  { 
    timestamps: true,
  }
);



const Bookings = mongoose.model("bookings", bookingsSchema);

module.exports = Bookings;