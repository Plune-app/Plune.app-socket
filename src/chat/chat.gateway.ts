import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Socket, Server } from "socket.io"
import { SaveChatDto } from './dto/save-chat.dto';
import { Events } from 'src/events';

@WebSocketGateway({ cors : { origin : "*" }})
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) { }

  @SubscribeMessage(Events.JOIN)
  joinRoom(
    @MessageBody() payload: { roomId: string, token: string },
    @ConnectedSocket() socket: Socket
  ) {
    socket.join(payload.roomId);

    //this emits for all sockets inside payload.roomId
    this.server.to(payload.roomId).emit("notification", `User joined in ${payload.roomId}`);
    console.log("connected ")

  }

  @SubscribeMessage('createChat')
  create(@MessageBody() createChatDto: SaveChatDto) {
    return this.chatService.create(createChatDto);
  }

  @SubscribeMessage('findAllChat')
  findAll() {
    return this.chatService.findAll();
  }

  @SubscribeMessage('removeChat')
  remove(@MessageBody() id: number) {
    return this.chatService.remove(id);
  }
}


/**
 * para definir um evento é so usar um decorator especifico como @SubscribeMessage ("nome da mensagem para obtencao do websocket")
 * para definir o que vai obter o valor no corpo do canal bidirecional é so usar o @MessageBody()
 */