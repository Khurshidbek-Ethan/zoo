import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // localhost:3000
  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
  // localhost:3000/detail
  @Get('detail')
  getDetail(): string {
    return this.appService.getDetail();
  }
}
