var app = require('./app/config/server');

const rotaHome = require("./app/routes/adicionar_usuario");
rotaHome(app)

var rotaAdicionarUsuario = require('./app/routes/adicionar_usuario'); 
rotaAdicionarUsuario(app); 

var rotaHistoria = require('./app/routes/historia');
rotaHistoria(app);

var rotaCursos = require('./app/routes/cursos'); 
rotaCursos(app); 

var rotaProfessores = require('./app/routes/professores'); 
rotaProfessores(app); 

app.listen(3000, () => {
    console.log("Servidor está sendo executado no endereço: http://localhost:3000")
})