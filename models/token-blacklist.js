const mongoose = require('mongoose');

const tokenBlacklistSchema = mongoose.Schema({
  blacklistedTokens: [{
    type: String
  }]
});

module.exports = new mongoose.model('tokenBlacklist', tokenBlacklistSchema);