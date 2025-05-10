const redis = require('../services/redisClient');

const rateLimiter = ({ limit, window }) => {
    return async (req, res, next) => {
      const ip = req.ip || req.connection.remoteAddress;
      const key = `rate_limit:${ip}`;
  
      try {
        const count = await redis.incr(key);
  
        if (count === 1) {
          await redis.expire(key, window);
        }
  
        if (count > limit) {
          return res.status(429).json({
            message: 'Too many requests. Please try again later.'
          });
        }
        
        req.requestCount = count;
        next();
      } catch (err) {
        console.error('Rate limiter error:', err);
        next(); // Continue even if Redis fails
      }
    };
  };
  
  module.exports = rateLimiter;