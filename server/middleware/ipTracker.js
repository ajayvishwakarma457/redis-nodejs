const redis = require('../services/redisClient');

const trackIP = async (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress;
  const key = `ip:${ip}`;

  // Increment count in Redis
  const count = await redis.incr(key);

  // Set an expiry time if it's the first request (24 hours)
  if (count === 1) {
    await redis.expire(key, 86400); // 86400 seconds = 24 hours
  }

  if (count > 10) {
    return res.status(429).json({
      message: 'Too many requests from this IP. Please try again later.'
    });
  }

  req.requestCount = count;
  next();
};

module.exports = trackIP;
