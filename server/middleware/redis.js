const redis = require('../services/redisClient');

const getCachedData = (key) => async (req, res, next) => {
    try {
        const data = await redis.get(key);
        if (data) {
            return res.json(JSON.parse(data)); // Already stringified in cache
        }
        next();
    } catch (err) {
        console.error('Redis cache error:', err);
        next();
    }
};

module.exports = { getCachedData };
