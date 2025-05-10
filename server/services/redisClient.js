const Redis = require('ioredis');

const redis = new Redis({
    host: 'redis-12163.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 12163,
    password: '9ETxSaegEhdB8W4jPPjIHqHOmNfetgTR'
});

redis.on('connect', () => {
    console.log('Redis connected');
});

module.exports = redis;
