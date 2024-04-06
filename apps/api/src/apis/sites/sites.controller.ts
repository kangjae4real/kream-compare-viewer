import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SitesService } from '@/services/sites/sites.service';
import { GetInfoRequest, GetInfoResponse } from '@/apis/sites/sites.dto';

@ApiTags('Sites')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @ApiOperation({
    description: 'Get kream product info (like, title/price/image)',
    summary: 'Get kream product info',
  })
  @Get(':id')
  async getInfo(
    @Req() request: Request,
    @Param('id') id: string,
    @Query() params: GetInfoRequest,
  ): Promise<GetInfoResponse> {
    const result = await this.sitesService.getInfo(id);

    if (result.failure === 'NOT_FOUND') {
      throw new NotFoundException(result.failure);
    }

    return result;
  }
}
