require("dotenv").config();
const Redis = require("ioredis");

let redis;

redis = new Redis({
  username: "default",
  host: "containers-us-west-173.railway.app",
  password: "jAduBvQdq8ZGyKiZVhwT",
  port: 7849,
  autoResubscribe: false,
  maxRetriesPerRequest: 5,
});

module.exports = redis;
