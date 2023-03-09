import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { HOST_DB, NAME_DB, PASSWORD_DB, PORT_DB, USERNAME_DB } from './config/environment.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: HOST_DB,
      port: PORT_DB,
      username: USERNAME_DB,
      password: PASSWORD_DB,
      database: NAME_DB,
      synchronize: false,
      autoLoadEntities: true,
      entities: ['dist/infra/typeorm/entities/*.entity{.ts,.js}'],
      migrations: ['dist/infra/typeorm/migrations/*.{js,ts}'],
  }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
