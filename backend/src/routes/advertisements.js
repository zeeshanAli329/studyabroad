const express = require("express");
const router = express.Router();

const {
  getActiveAdvertisements,
  getAllAdvertisements,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
  toggleAdvertisement,
} = require("../controllers/advertisementController");

const { adminAuth } = require("../middleware/auth");

router.get("/", getActiveAdvertisements);

router.get("/all", adminAuth, getAllAdvertisements);

router.post("/", adminAuth, createAdvertisement);

router.put("/:id", adminAuth, updateAdvertisement);

router.delete("/:id", adminAuth, deleteAdvertisement);

router.put("/:id/toggle", adminAuth, toggleAdvertisement);

module.exports = router;