import { Module } from '@nestjs/common';
import { TicketHistoryService } from './ticket-history.service';
import { TicketHistoryController } from './ticket-history.controller';

@Module({
  controllers: [TicketHistoryController],
  providers: [TicketHistoryService],
})
export class TicketHistoryModule {}
