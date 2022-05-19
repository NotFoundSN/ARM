let AdminRenderController = {
    loginAdmin: (req,res) => {
        res.render('admin/login');
        /*let usuario = {
            usuario = req.body.user;
            pass = req.body.password;
        }*/
    },
    addProduct: (req,res) => {
        res.render('admin/addProduct');
        /*let producto = {
            nombre = req.body.name;
            precio = req.body.price;
            descuento = req.body.discount;
            descripcion = req.body.description;
            image = req.body.image;
        };*/
    },
    editProduct: function(req,res){
        res.render('admin/editProduct');
        /*let producto = {
            nombre = req.body.name;
            precio = req.body.price;
            descuento = req.body.discount;
            descripcion = req.body.description;
            image = req.body.image;
        }*/
    },
};

let AdminFunctionsController = {
    addProduct: (req,res) => {
        //
    },
    deleteProduct: (req,res) => {
        //
    },
    editProduct: (req,res) => {
        //
    },
};

module.exports = {
    adminRender : AdminRenderController,
    adminFunctions : AdminFunctionsController,
};