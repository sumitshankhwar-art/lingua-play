import { Module } from '@nestjs/common';
import { UserModuleService } from './user-module.service';
import { UserModuleController } from './user-module.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {UserSchema,User} from './user.schema';

@Module({
  imports: [  MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UserModuleController],
  providers: [UserModuleService],
    exports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), 
  ],
})
export class UserModule {}
