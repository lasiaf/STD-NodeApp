const db = require(
    path.join(__basedir, 'src/config/database')
);

const getAllProducts = async (id) => {
    const result = await db.query('SELECT * FROM products where title like %id%');
    return result.rows;
};

const getSelectProducts = async (title) => {
    const result = await db.query(
        'SELECT * FROM products WHERE title ILIKE $1',
        [`%${title}%`]
    );

    return result.rows;
};

module.exports = {
    getAllProducts,
    getSelectProducts
};