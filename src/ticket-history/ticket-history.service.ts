import { Injectable } from '@nestjs/common';
import { CreateTicketHistoryDto } from './dto/create-ticket-history.dto';
import { UpdateTicketHistoryDto } from './dto/update-ticket-history.dto';

@Injectable()
export class TicketHistoryService {
  create(createTicketHistoryDto: CreateTicketHistoryDto) {
    return 'This action adds a new ticketHistory';
  }

  findAll() {
    return `This action returns all ticketHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketHistory`;
  }

  update(id: number, updateTicketHistoryDto: UpdateTicketHistoryDto) {
    return `This action updates a #${id} ticketHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketHistory`;
  }
}
