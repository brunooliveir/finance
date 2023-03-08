import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  healthCheck() {
    return {
      status: 200,
      message: 'Health',
    };
  }
}
