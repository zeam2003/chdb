import MySQLConn from "./config/db.js";
import express from 'express';
import DBContainer from "./contenedor.js";

const DB = new DBContainer(MySQLConn, 'productos');
console.log(DB.getAll());