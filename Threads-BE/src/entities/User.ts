import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Like,
  CreateDateColumn,
} from "typeorm";
import { Replies } from "./Replies";
import { Threads } from "./Threads";
import { Following } from "./Following";
import { Likes } from "./Likes";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  photo_profile: string;

  @Column({ nullable: true })
  bio: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;

  @OneToMany(() => Replies, (replies) => replies.user, {
    onDelete: "CASCADE",
  })
  replies: Replies[];

  @OneToMany(() => Threads, (threads) => threads.user, {
    onDelete: "CASCADE",
  })
  threads: Threads[];

  @OneToMany(() => Following, (following) => following.follower)
  followings: Following[];

  @OneToMany(() => Likes, (likes) => likes.user)
  likes: Likes[];
}
