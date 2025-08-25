import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Message } from "src/message/entities/message.entity";
import { Organization } from "src/message/entities/organization.entity";


@Entity({ name: "chat" })
export class Chat {

  @PrimaryGeneratedColumn({ name: "roomId" })
  roomId: string;

  //em caso de grupos
  @Column({ name: "name", type: "text" })
  name: string;


  @Column({ name: "isGeneral", type: Boolean, default: false })
  isGeneral : Boolean;

  @OneToMany(() => Message, (msg) => msg.chat)
  messages: Message[];

  @Column({ name: "type", enum: ["private", "public"], default: "private", type: "text" })
  type: string;

  @Column({ nullable: true, name: "avatar", type: "text" })
  avatar?: string;
  
  @JoinColumn({ name: "createdBy" })
  @ManyToOne(() => User)
  createdBy: User;

  @ManyToOne(() => Organization, (org) => org.chats)
  @JoinColumn({ name: "organizationId" })
  organization: Organization;

  // @OneToMany(() => UserChatsRole, (ucr) => ucr.chat)
  // userChatRoles: UserChatsRole[]
}

