const multer = require("multer");

const productModel = require(
    path.join(__basedir, 'src/models/productModel')
);

const { v4: uuidv4 } = require("uuid");

/* konfigurasi upload */
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, path.join(__basedir, "uploads"));
    },

    /*
    //Agar nama file tidak sama : Ini file name menggunakan tanggal dan random karakter
    filename: function (req, file, cb) {

        const ext = path.extname(file.originalname);

        const newName =
            Date.now() + "-" + Math.round(Math.random() * 1e9) + ext;

        cb(null, newName);
    }
    */
   
    //Agar nama file tidak sama : Ini file name menggunakan UUID yang lebih spesifik agar menghindari dobel name
    filename: function (req, file, cb) {

        const ext = path.extname(file.originalname);

        const uniqueName = uuidv4() + ext;

        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

class productController {

    async index(req, res) {
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

    /* upload file product */
    uploadProduct(req, res) {

        upload.single("file")(req, res, function(err) {

            if (err) {
                return res.send("Upload gagal");
            }

            res.json({
                message: "File berhasil diupload",
                file: req.file.filename
            });

        });

    }


}

module.exports = new productController();