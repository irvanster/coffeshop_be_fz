const {Client} = require('pg')


const db = new Client({
    user: 'postgres',
    host: 'db.keilsqmwsuwjgkralazh.supabase.co',
    database: 'postgres',
    password: 'xx55y09!XXN98%2$#',
    port: 5432,
  })

db.connect((err)=> {
    if(err) {
        console.log('db connection error', err)
    }
    // if(!err) {
    //     console.log('database berhasil tersambung')
    // }else {
    //     console.log('db error connnection', err)
    // }
})

module.exports = db