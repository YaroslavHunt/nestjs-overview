import * as process from 'node:process';

export default () => ({
  port: process.env.PORT,
  db_host: process.env.DB_HOST,
  db_port: process.env.PGSQL_PORT,
  db_user: process.env.PGSQL_USER,
  db_password: process.env.PGSQL_PASSWORD,
  db_name: process.env.PGSQL_NAME,
  secret_jwt: process.env.SECRET,
  expire_jwt: process.env.EXPIRE_JWT,
})