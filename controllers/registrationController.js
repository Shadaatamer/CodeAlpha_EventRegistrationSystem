const Registration = require("../models/registrationModel");
const catchAsync = require("../utils/catchAsync");

exports.createReg = catchAsync(async (req, res) => {
  const newReg = await Registration.create(req.body);
  res.status(201).json({
    status: "success",
    data: newReg,
  });
});

exports.getAllReg = catchAsync(async (req, res) => {
  const registrations = await Registration.find().populate("event");

  res.status(200).json({
    status: "success",
    data: registrations,
  });
});

exports.deleteReg = catchAsync(async (req, res) => {
  const registration = await Registration.findByIdAndUpdate(
    req.params.id,
    { status: "cancelled" },
    { new: true },
  );
  res.status(200).json({
    status: "success",
    data: registration,
  });
});
