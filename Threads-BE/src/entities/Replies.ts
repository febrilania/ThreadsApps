import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Threads } from "./Threads";

@Entity()
export class Replies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;

  @Column()
  created_at: Date;

  @Column()
  created_by: number;

  @Column()
  updated_at: Date;

  @Column()
  updated_by: number;

  @ManyToOne(() => User, (user) => user.replies)
  user: User;

  @ManyToOne(() => Threads, (threads) => threads.replies)
  threads: Threads;
}
