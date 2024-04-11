import { Controller, Get, NotFoundException, Param, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SitesService } from '@/services/sites/sites.service';
import { ProductResponse } from '@/apis/sites/sites.dto';

@ApiTags('Sites')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @ApiOperation({
    summary: 'Get kream product info',
    description: 'Get kream product info (like title, price, image)',
  })
  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<ProductResponse> {
    const result = await this.sitesService.getProduct(id);

    if (!result) {
      throw new NotFoundException('NOT_FOUND');
    }

    return result;
  }
}
