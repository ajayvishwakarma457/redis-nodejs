const getProducts = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve([{ id: 1, name: 'Product 1', price: 100 }]);
    }, 2000);
});

const getProductDetail = (id) => new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            id,
            name: `Product ${id}`,
            price: Math.floor(Math.random() * id * 100)
        });
    }, 2000);
});

module.exports = {
    getProducts,
    getProductDetail
};
