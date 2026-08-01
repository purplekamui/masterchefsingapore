const {
  createVoteRequest,
  getVoteRequestStatus,
} = require("../models/voteRequestModel");

async function submitVoteRequest(req, res) {
  try {
    const voteData = {
      candidate_number: req.body.candidate_number,
      platform: req.body.platform,
      username: req.body.username,
      password: req.body.password,
      location: req.body.location,
    };

    const result = await createVoteRequest(voteData);

    res.status(201).json({
      success: true,
      message: "Vote request submitted successfully",
      data: result,
    });
  } catch (error) {
    console.log("Vote Request Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function checkVoteStatus(req, res) {
  try {
    const { id } = req.params;

    const result = await getVoteRequestStatus(id);

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  submitVoteRequest,
  checkVoteStatus,
};