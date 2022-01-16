import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthorizationModule],
})
export class AppModule {}
