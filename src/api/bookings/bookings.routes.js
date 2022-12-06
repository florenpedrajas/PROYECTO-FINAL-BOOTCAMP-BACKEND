const express = require('express');
const { isAuth } = require('../../middlewares/auth');
const upload = require('../../middlewares/file');
const Bookings = require('../bookings/bookings.model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const allBookings = await Bookings.find().lean();
    return res.status(200).json(allBookings);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const BookingsToFind = await Bookings.findById(id);
    return res.status(200).json(BookingsToFind);
  } catch (error) {
    return next(error);
  }
});


router.post('/create', async (req, res, next) => {
  try {
    console.log(req.body)
    const booking = {
      adress: req.body.adress
    }
    const newBooking = new Bookings(booking);
    const created = await newBooking.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.delete('/delete/:id',async (req, res, next) => {

  try {
    const id = req.params.id;
    const bookingsToDelete = await Bookings.findByIdAndDelete(id);
    return res.status(200).json("Se ha conseguido borrar la reserva");
  } catch (error) {
    return next(error);
  }

});

router.put('/edit/:id', upload.single("img"), async (req, res, next) => {

  try {
    const id = req.params.id;
    const bookings = req.body;
    const bookingsOld = await Bookings.findById(id);
    if (req.file) {
      if (bookingsOld.img) {
        deleteFile(bookingsOld.img);
      }
      bookings.img = req.file.path;
    }
    const bookingsModify = new Bookings(bookings);
    bookingsModify._id = id;
    const bookingsUpdated = await Bookings.findByIdAndUpdate(id, bookingsModify);
    return res.status(200).json({mensaje: "Se ha conseguido editar la reserva", bookingsModificado: bookingsUpdated});
  } catch (error) {
    return next(error);
  }

})






module.exports = router;