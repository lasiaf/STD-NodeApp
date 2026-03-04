const path = require('path');
const productModel = require(
    path.join(__basedir, 'src/models/productModel')
);

const index = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await productModel.getSelectProducts(id);

        res.render('screen/products', {
            products: data
        });

    } catch (error) {
        console.error(error);
        res.send('Error mengambil data');
    }
};

module.exports = {
    index
};