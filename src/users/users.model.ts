import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({}) // نام اجباری
  firstName: string;

  @Prop({}) // نام خانوادگی اجباری
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop({})
  password: string;

  @Prop({ unique: true })
  mobile: string;

  @Prop({ enum: ['USER'], default: 'USER' })
  role: string;

  @Prop({ default: 0 })
  walletBalance: number;

  @Prop({ unique: true })
  nationalCode: string;

  @Prop({})
  birthDate: Date;

  @Prop({})
  shebaNumber: string;

  @Prop({ required: true, enum: ['cash', 'rozcart'], default: 'rozcart' })
  refundType: string;
}

export const UserModel = SchemaFactory.createForClass(User);
