import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Threads } from "./Threads";

@Entity()
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_at: Date;

  @Column()
  created_by: number;

  @Column()
  updated_at: Date;

  @Column()
  updated_by: number;

  @ManyToOne(() => User, (user) => user.likes)
  user: User;

  @ManyToOne(() => Threads, (threads) => threads.likes)
  threads: Threads;
}
