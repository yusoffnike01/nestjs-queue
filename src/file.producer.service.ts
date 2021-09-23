import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

Injectable();
export class FileProducerService {
  constructor(@InjectQueue('file-operation') private queue: Queue) {}

  async deleteFile(fileName: string) {
    // logic to delete file record from db
    const filePath = `/${fileName}`;
    await this.queue.add('delete-file', { path: filePath }, { delay: 10000 });
  }
}
