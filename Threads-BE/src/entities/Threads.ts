import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Likes } from "./Likes";
import { Replies } from "./Replies";

@Entity()
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ nullable: true })
  image: string;

  @Column()
  number_of_replies: number;

  @Column()
  created_at: Date;

  @Column()
  created_by: number;

  @Column()
  updated_at: Date;

  @Column()
  updated_by: number;

  @ManyToOne(() => User, (user) => user.threads)
  user: User;

  @OneToMany(() => Likes, (likes) => likes.threads)
  likes: Likes;

  @OneToMany(() => Replies, (replies) => replies.threads)
  replies: Replies;
}
