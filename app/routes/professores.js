var dbConnection = require('../config/dbConnection');

module.exports = (app) => {
    app.get('/informacao/professores', function (req, res) {
        const sql = require('mssql/msnodesqlv8')

        const sqlConfig = {
            user: 'BD2211003',
            password: 'whitz_dev_sqlserver22!!',
            database: 'BD',
            server: 'APOLO',
        }

        async function getProfessores() {
            try {
                const pool = await dbConnection(); // executando a funcao 
                const results = await pool.request().query('SELECT * from PROFESSORES');
                res.render('informacao/professores', { profs: results.recordset });
            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();


        // res.render("informacao/professores");
    });

}