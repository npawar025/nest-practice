import { Controller, Get, Post, Logger, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';

@Controller('messages')
export class MessagesController {
    private logger = new Logger('messages');

    @Get()
    listMessages() {


    }

    @Post()
    createMessages(@Body() body : CreateMessageDto) {
        this.logger.log(body);

    }

    @Get('/:id')
    getMessages(@Param('id') id : string) {
        this.logger.log(id)
    }
}
