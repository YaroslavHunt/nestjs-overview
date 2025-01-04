import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../user/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}