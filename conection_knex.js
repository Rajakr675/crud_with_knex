
// This file only for conection with database.


let input=require("prompt-sync")();
const knex=require("knex") ({
    client:"mysql",
    connection:{
        host:"localhost",
        user:"root",
        database:"knex_crud",
        password:"raja@123"
    }
})

knex.schema.createTable("Persons" , (table) => {
    table.increments("id").primary();
    table.string("fname");
    table.string("lname");
    table.string("Joining_date");
    table.string("email").unique();
}).then(() => {
    console.log("Table create successful...")
}).catch((err) => {
    console.log(err.message);
})

module.exports = knex
