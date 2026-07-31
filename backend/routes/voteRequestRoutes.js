const express = require("express");
const router = express.Router();

const {
  submitVoteRequest,
} = require("../controllers/voteRequestController");

router.post("/submit", submitVoteRequest);

module.exports = router;