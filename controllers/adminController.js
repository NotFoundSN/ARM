let AdminRenderController = {
    loginAdmin: (req,res) => {
        res.render('admin/login');
    },
    addProduct: (req,res) => {
        res.render('admin/addProduct');
    },
    editProduct: function(req,res){
        res.render('admin/editProduct');
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