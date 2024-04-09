import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';

@ApiTags('Root')
@Controller('')
export class RootController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
  ) {}

  @Get()
  getHello() {
    return 'Kream Compare Viewer - API';
  }

  @ApiOperation({
    summary: 'Health check',
    description: 'Get server health',
  })
  @Get('health-check')
  @HealthCheck()
  async healthCheck() {
    return this.health.check([
      () => this.http.pingCheck('docs', 'http://localhost:8080/docs'),
    ]);
  }
}
