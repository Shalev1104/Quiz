import { knex } from "knex";

const knexfile = require('./configs/knexfile');

export default knex(knexfile.development);