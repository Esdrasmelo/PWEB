var sql = require('mssql/msnodesqlv8');
module.exports = function () {

    const sqlConfig = {
        user: 'BD2211003',
        password: 'whitz_dev_sqlserver22!!',
        database: 'BD',
        server: 'APOLO',
    }

    return sql.connect(sqlConfig);
} 
