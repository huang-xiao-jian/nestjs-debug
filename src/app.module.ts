import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MonitorModule } from './monitor/monitor.module';

@Module({
  imports: [
    // 配置内容全局共享
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    MonitorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
