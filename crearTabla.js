import knex from "knex";
import MySQLConn from './config/db.js';

const Knex = knex(MySQLConn);

Knex.schema.createTableIfNotExists('productos', table => {
    table.increments('id');
    table.string('title');
    table.integer('price');
    table.integer('stock');
    table.string('description');
}).then(() => {
    console.log('creada');
})
.catch((error) => console.log(error))
.finally(() => Knex.destroy());


