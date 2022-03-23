import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthController } from './controller/health/health.controller';

@Module({
  imports: [ConfigModule],
  controllers: [HealthController],
  providers: [],
})
export class MonitorModule {}
