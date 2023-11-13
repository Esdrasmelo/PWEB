module.exports = (app) => {
    app.get('admin/adicionar_usuario', (request, response) => {
        response.render("admin/adicionar_usuairo");
    })
}