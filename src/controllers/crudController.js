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

}

module.exports = new CrudController();