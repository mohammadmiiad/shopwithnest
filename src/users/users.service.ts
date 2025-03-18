import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, UserDocument } from './users.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AdminCreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(AdminCreateUserDto: AdminCreateUserDto) {
    const user = new this.userModel(AdminCreateUserDto);
    await user.save();
    return {
      statusCode: HttpStatus.CREATED,
      message: 'User created successfully',
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
