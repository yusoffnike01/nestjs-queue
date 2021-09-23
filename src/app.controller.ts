import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { FileProducerService } from './file.producer.service';
import { MessageProducerService } from './message.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private messageProducerService: MessageProducerService,
    private fileFileProducerServie: FileProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('send-message')
  async sendMessage(@Query('msg') msg: string) {
    this.messageProducerService.sendMessage(msg);
    return msg;
  }

  async deleteFile(@Query('fileName') fileName: string) {\
   await this.fileFileProducerServie.deleteFile(fileName);
   return 'delete';
  }
}
