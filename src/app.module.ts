import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileConsumer } from './file.consumer';
import { FileProducerService } from './file.producer.service';
import { MessageConsumer } from './message-consumer';
import { MessageProducerService } from './message.producer.service';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: '172.24.255.127',
        port: 6378,
      },
    }),
    BullModule.registerQueue(
      { name: 'message-queue' },
      { name: 'file-operation' },
    ),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    MessageProducerService,
    MessageConsumer,
    FileProducerService,
    FileConsumer,
  ],
})
export class AppModule {}
