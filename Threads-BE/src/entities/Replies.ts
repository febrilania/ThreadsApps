import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Threads } from "./Threads";

@Entity()
export class Replies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.replies)
  user: User;

  @ManyToOne(() => Threads, (threads) => threads.replies)
  threads: Threads;
  length: any;
}
