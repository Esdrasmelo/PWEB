module.exports = (app) => {
    app.get('/', function (req, res) {
        res.render("home/index");
    });
}