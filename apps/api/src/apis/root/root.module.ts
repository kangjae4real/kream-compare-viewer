import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { RootController } from '@/apis/root/root.controller';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [RootController],
})
export class RootApiModule {}
