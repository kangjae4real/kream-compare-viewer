import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { SitesService } from '@/sites/sites.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sites')
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Get(':id')
  findWithId(@Param('id') id: string) {
    try {
      return this.sitesService.findWithId(id);
    } catch (error) {
      throw new NotFoundException('Not Found.');
    }
  }
}
