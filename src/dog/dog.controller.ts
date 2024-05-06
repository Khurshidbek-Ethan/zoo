import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { DogService } from './dog.service';
import { Request, Response, query } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}
  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param() params: any, @Query() query: any): string {
    console.log('params:', params);
    console.log('query:', query);

    return this.dogService.introduce();
  }

  //   @Get('greet/:id')
  //   public introduce(@Param('id') id: any, @Query('name') name: any): string {
  //     console.log('id:', id);
  //     console.log('query:', name);

  //     return this.dogService.introduce();
  //   }

  //   @Get('greet/:id')
  //   public introduce(@Param('id') id: any, @Query() query: any): string {
  //     console.log('id:', id);
  //     console.log('query:', query);

  //     return this.dogService.introduce();
  //   }

  //   @Get('greet/:id')
  //   public introduce(@Param('id') id: any): string {
  //     console.log('id:', id);
  //     //     console.log('query:', request.query);

  //     return this.dogService.introduce();
  //   }

  //   @Get('greet/:id')
  //   public introduce(@Param() params: any): string {
  //     console.log('params:', params);
  //     //     console.log('query:', request.query);

  //     return this.dogService.introduce();
  //   }

  //   @Get('greet/:id')
  //   public introduce(@Req() request: Request, @Res() response: Response) {
  //     console.log('params:', request.params);
  //     console.log('query:', request.query);
  //     const result = this.dogService.introduce();
  //     // return this.dogService.introduce();
  //     response.status(200).send(result);
  //   }

  //   @Get('greet/:id/:itemId')
  //   public introduce(@Req() request: Request): string {
  //     console.log('params:', request.params);

  //     return this.dogService.introduce();
  //   }
}
