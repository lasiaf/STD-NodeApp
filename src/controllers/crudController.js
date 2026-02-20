const path = require('path');
const db = require(
    path.join(__basedir, 'src/config/database')
);

class CrudController {

    store(req, res) {
        const title = req.body.title;
        const description = req.body.description;

        console.log("Title:", title);
        console.log("Description:", description);

        const data = {
            title: title,
            description: description
        };

        //res.send(`Data berhasil diterima! Judul : ${title} dan Deskripsi ${description}`);
        res.render('screen/form/tampil', { data });
    }

    stores(req, res) {

        console.log(req.body); 
        // ini sudah berupa array of object

        req.body.forEach((item, index) => {
            console.log("Title:", item.title);
            console.log("Description:", item.description);
        });

        res.json({
            message: "Data diterima",
            data: req.body
        });
    }

    async storedb(req, res) {
        const { title, description } = req.body;
        const rese = await db.query('SELECT current_database()');
        try {
            const result = await db.query(
                'INSERT INTO products (title, description) VALUES ($1, $2) RETURNING *',
                [title, description]
            );

            res.json({
                message: 'Data berhasil disimpan',
                data: result.rows[0]
            });

            
            

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Database error' });
            console.log(rese.rows);
        }

    }

    async checkConnection(req, res) {
        try {

            const result = await db.query('SELECT NOW()');

            res.status(200).json({
                success: true,
                message: 'Database connected successfully',
                server_time: result.rows[0].now
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                success: false,
                message: 'Database connection failed',
                error: error.message
            });
        }
    }

}

module.exports = new CrudController();