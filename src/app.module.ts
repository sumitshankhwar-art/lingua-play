import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseModuleModule } from './course-module/course-module.module';
import { PackModuleModule } from './pack-module/pack-module.module';
import { SentenceModuleModule } from './sentence-module/sentence-module.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user-module/user-module.module';
import { UserProgressModule } from './user-progress/user-progress.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true }), 
             MongooseModule.forRoot(process.env.MONGO_URI!),
             CourseModuleModule,
             PackModuleModule,
             SentenceModuleModule,
             UserModule,
             UserProgressModule,
             AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
