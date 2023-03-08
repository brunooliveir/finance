import {
    HOST_DB,
    NAME_DB,
    PASSWORD_DB,
    PORT_DB,
    USERNAME_DB,
  } from 'src/config/environment.config';
  import { DataSource } from 'typeorm';
  
  export default new DataSource({
    type: 'mysql',
    host: HOST_DB,
    port: PORT_DB,
    username: USERNAME_DB,
    password: PASSWORD_DB,
    database: NAME_DB,
    synchronize: false,
    entities: ['src/infra/typeorm/entities/*.entity{.ts,.js}'],
    migrations: ['src/infra/typeorm/migrations/*.{js,ts}'],
  });