import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";

export type UserDocument = User & Document; 

@Schema({ collection: 'users', timestamps: true })
export class User {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;


    @Prop(  { required: true })
    displayName: string;

    @Prop({  })
    photoUrl: string;

    @Prop({ enum: ['user', 'admin'], default: 'user' })
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);