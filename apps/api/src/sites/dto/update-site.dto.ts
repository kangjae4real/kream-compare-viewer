import { PartialType } from '@nestjs/swagger';
import { CreateSiteDto } from '@/sites/dto/create-site.dto';

export class UpdateSiteDto extends PartialType(CreateSiteDto) {}
