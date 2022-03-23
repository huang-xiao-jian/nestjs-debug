import { Controller, Get, HttpCode, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('health')
export class HealthController {
  constructor(@Inject() config: ConfigService<any>) {
    console.log('config', config);
  }

  @Get()
  @HttpCode(200)
  heatBeat() {
    return true;
  }
}
