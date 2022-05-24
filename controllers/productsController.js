module.exports = {
    listProducts: (req,res) => {
        res.send();
    },
    getProduct: (req,res) => {
        res.render('productDetails.ejs');
    },
    searchProduct: (req,res) => {
        res.send();
    },
}