import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Message } from "src/message/entities/message.entity";

@Entity({ name : "chat" })
export class Chat {

  @PrimaryColumn({ name: "roomId", type: "text" })
  roomId: number;

  //em caso de grupos
  @Column({ name: "name", type: "text" })
  name: string;

  @ManyToMany(() => User, (user) => user.chats)
  users: User[]

  @OneToMany(() => Message, (msg) => msg.chat)
  messages: Message[];

  @Column({ name: "type", enum: ["private", "public"], default: "private", type: "text" })
  type: string

}
