import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Likes } from "./Likes";
import { Replies } from "./Replies";

@Entity()
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.threads)
  user: User;

  @OneToMany(() => Likes, (likes) => likes.threads)
  likes: Likes;

  @OneToMany(() => Replies, (replies) => replies.threads)
  replies: Replies;
}
