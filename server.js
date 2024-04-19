const db = require('./db')

async function test() {
    const DB_answer = await db.query(`select * from test`)
    console.log(DB_answer.rows)
}

test()