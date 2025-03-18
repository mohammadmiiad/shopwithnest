import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/shopNest'), // آدرس دیتابیس رو اینجا تغییر بده
  ],
  exports: [MongooseModule], // اینجا ماژول رو اکسپورت می‌کنیم که در بقیه قسمت‌ها استفاده بشه
})
export class DatabaseModule {}
