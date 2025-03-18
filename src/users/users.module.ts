import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './controllers/users.controller';
import { User, UserModel } from './users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminUsersController } from './controllers/admin.users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserModel }]),
  ],
  controllers: [AdminUsersController, UsersController],
  providers: [UsersService],
})
export class UsersModule {}
