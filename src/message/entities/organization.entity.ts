import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "src/chat/entities/chat.entity";
import { User } from "src/chat/entities/user.entity";

@Entity("organization")
export class Organization {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: "name", type: "text" })
  name: string;

  @CreateDateColumn()
  createdAt: Date;
  @Column({ name: "logo", type: "text", nullable: true })
  logo?: string

  @JoinColumn({ name: "createdBy" })
  @ManyToOne(() => User)
  createdBy: User;


  
  @DeleteDateColumn()
  deletedAt?: Date;

  @OneToMany(() => Chat, (chat) => chat.organization)
  chats: Chat[]
}
