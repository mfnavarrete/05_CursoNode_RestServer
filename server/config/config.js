process.env.PORT = process.env.PORT || 3000;

const USER_MONGODB = 'root';
const PASWD_MONGODB = 'Semperfi1';
const PORT_MONGO = 27017;
const BASE_NAME = 'cafe';
const CONEX_MONGODB_LOCAL = `mongodb://localhost:${PORT_MONGO}/${BASE_NAME}`;
const CONEX_MONGODB_MLAB = `mongodb://${USER_MONGODB}:${PASWD_MONGODB}@ds137812.mlab.com:37812/${BASE_NAME}`;

//#######################
//###     ENTORNO     ###
//#######################
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//#######################
//###  BASE DE DATOS  ###
//#######################
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = CONEX_MONGODB_LOCAL;
} else {
    urlDB = CONEX_MONGODB_MLAB;
}

process.env.URLDB = urlDB;