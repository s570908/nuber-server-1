import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Message from "./Message"; // 임포트

@Entity()
class Chat extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @OneToMany((type) => Message, (message) => message.chat)
  messages: Message[];

  @CreateDateColumn() createAt: string;
  @UpdateDateColumn() updateAt: string;
}

export default Chat;
