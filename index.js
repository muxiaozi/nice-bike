const Koa = require('koa');
let config = require('./config/common');
// config = config[process.env.NODE_ENV || 'development']
config = config['production'];
// const app = new Koa();

// app.use((ctx) => {
//     ctx.body = 'Nice bike';
// })

// app.listen(8989);
const mysql = require('mysql');

let conn = mysql.createConnection(config.mysql);

conn.connect((err) => {
    if(err) console.error('Database connect fail:', err)
})

conn.query('select * from sys_menu', (err, res) => {
    if(err) console.error('Database connect fail:', err)
    console.log(res)
})
