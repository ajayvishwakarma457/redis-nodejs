const express = require('express');
const redis = require('./services/redisClient');
const { getProducts, getProductDetail } = require('./api/products');
const { getCachedData } = require('./middleware/redis');
const trackIP = require('./middleware/ipTracker');
const rateLimiter = require('./middleware/rateLimiter');

const app = express();

app.use(rateLimiter({ limit: 15, window: 20 }));

app.get('/', (req, res) => {
    res.send(`Hello World! ${req.requestCount}`);
});

app.get('/products', getCachedData('products'), async (req, res) => {
    const products = await getProducts();
    await redis.setex('products', 20, JSON.stringify(products));
    res.json({ products });
});

app.get('/product/:id', async (req, res) => {
    const id = req.params.id;
    const key = `product:${id}`;

    let product = await redis.get(key);

    if (product) {
        return res.json({ product: JSON.parse(product) });
    }

    product = await getProductDetail(id);
    await redis.set(key, JSON.stringify(product));

    res.json({ product });
});

app.get('/order/:id', async (req, res) => {
    const productId = req.params.id;
    const key = `product:${productId}`;

    await redis.del(key);

    res.json({
        message: `Order placed successfully, product id: ${productId} is ordered.`,
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
