const Event = require("../models/eventModel");
const catchAsync = require("../utils/catchAsync");

exports.createEvent = catchAsync(async (req, res) => {
  const newEvent = await Event.create(req.body);
  res.status(201).json({
    status: "success",
    data: newEvent,
  });
});

exports.getAllEvents = catchAsync(async (req, res) => {
  const events = await Event.find();

  res.status(200).json({
    status: "success",
    data: events,
  });
});

exports.getEvent = catchAsync(async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) {
    return res.status(404).json({
      status: "fail",
      message: "Event not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: event,
  });
});
