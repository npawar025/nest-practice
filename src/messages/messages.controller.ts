import { Controller, Get, Post, Logger, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
    private logger = new Logger('messages');
    messagesService: MessagesService;
    constructor() {
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll()
    }

    @Post()
    createMessages(@Body() body: CreateMessageDto) {
        this.logger.log(body);
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    async getMessages(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);
        if(!message){
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
