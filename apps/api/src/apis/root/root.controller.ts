import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Root')
@Controller('')
export class RootController {
  @Get()
  async getHello() {
    return 'Kream Compare Viewer - API';
  }

  @Get('/health')
  async health() {
    return true;
  }
}
