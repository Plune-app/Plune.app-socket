import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "./chat.entity";
import { Message } from "../../message/entities/message.entity";


export type OrganizationRoleType = "Admin" | "Editor" | "Approver" | "Viewer";

@Entity({ name: "user", synchronize: true })
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: "name", type: "text" })
  name: string;

  @Column({ unique: true, name: "email", type: "text" })
  email: string;

  @Column({ name: "password", type: "text" })
  password: string;

  @Column({ nullable: true, name: "avatar", type: "text" })
  avatar?: string;

  @Column({ type: "date", default: new Date(), name: "lastAccess" })
  lastAccess: Date;

  // @ManyToMany(() => Chat, (chat) => chat.users)
  // @JoinTable() // apenas de um lado!
  // chats: Chat[];

  @OneToMany(() => Message, (msg) => msg.user)
  messages: Message[]
  //relationship unnecessary in this project 

  // @ManyToMany(() => UserOrganizationRole, role => role.user)
  // organizationRoles?: UserOrganizationRole[];

  // relationship for created flows by users
  // @OneToMany(() => Flow, (flow) => flow.createdBy)
  // flows?: Flow[];

  // @OneToMany(() => Form, (form) => form.createdBy)
  // forms?: Form[]
}