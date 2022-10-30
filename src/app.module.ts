import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entity/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'toturial',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
