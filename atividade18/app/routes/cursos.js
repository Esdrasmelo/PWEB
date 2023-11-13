module.exports = (app) => {
    app.get('/informacao/cursos', function (req, res) {
        res.render("informacao/cursos");
    });
}