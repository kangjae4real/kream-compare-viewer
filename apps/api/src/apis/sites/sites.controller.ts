import { Controller, Get, NotFoundException, Param, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SitesService } from '@/services/sites/sites.service';
import { GetInfoResponse } from '@/apis/sites/sites.dto';

@ApiTags('Sites')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @ApiOperation({
    description: 'Get kream product info (like title, price, image)',
    summary: 'Get kream product info',
  })
  @Get(':id')
  async getInfo(
    @Req() request: Request,
    @Param('id') id: string,
  ): Promise<GetInfoResponse> {
    const result = await this.sitesService.getInfo(id);

    if (!result) {
      throw new NotFoundException('NOT_FOUND');
    }

    return result;
  }
}
