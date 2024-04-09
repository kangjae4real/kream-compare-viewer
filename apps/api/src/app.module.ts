import { Module } from '@nestjs/common';
import { RootApiModule } from '@/apis/root/root.module';
import { SitesApiModule } from '@/apis/sites/sites.module';

@Module({
  imports: [RootApiModule, SitesApiModule],
})
export class AppModule {}
