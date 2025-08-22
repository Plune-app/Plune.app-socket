import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { MessageService } from './message.service';
import { SaveMessageDTO } from './dto/save-message.dto';
import { Socket } from 'socket.io';
import { Events } from 'src/events';

@WebSocketGateway({ cors : { origin : "*" }})
export class MessageGateway {
  constructor(private readonly messageService: MessageService) {}

  //this gets the message event inside chanel
  @SubscribeMessage(Events.MESSAGE)
  async handleSendMessage(
    @MessageBody() payload: SaveMessageDTO,
    @ConnectedSocket() client: Socket,
  ) {
    //save message in database
    console.log(payload.roomId)
    client.broadcast.to(payload.roomId).emit(Events.MESSAGE, payload);
    this.messageService.saveMessage(payload);
  }

  @SubscribeMessage(Events.MOVE)
  handleMouseMove(
    @MessageBody() payload: { roomId : string, xPos: number, yPos: number, userId : number },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(payload.roomId).emit(Events.MOVE, payload);
  }
  @SubscribeMessage(Events.LEAVE)
  handleMouseLeave(
    @MessageBody() payload: { roomId : string; userId : number },
    @ConnectedSocket() client: Socket,
  ) {
    client.to(payload.roomId).emit(Events.MOVE, payload);
  }
}
