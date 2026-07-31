const supabase = require("../config/supabase");

async function createVoteRequest(voteData) {
  const { data, error } = await supabase
    .from("vote_requests")
    .insert([voteData])
    .select();

  if (error) throw error;

  return data;
}

module.exports = {
  createVoteRequest,
};