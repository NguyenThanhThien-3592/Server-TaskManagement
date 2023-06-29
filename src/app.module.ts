import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/typeorm.config';
import { ProjectModule } from './project/project.module';
import { ProjectMemberModule } from './project-member/project-member.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ProjectModule,
    ProjectMemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
