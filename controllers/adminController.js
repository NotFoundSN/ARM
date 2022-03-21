let AdminRenderController = {
    loginAdmin: (req,res) => {
        res.render('login');
    },
    addProduct: (req,res) => {
        res.render('addProduct');
    },
    editProduct: function(req,res){
        res.render('editProduct');
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
    adminFunctions : AdminFunctionsController
};