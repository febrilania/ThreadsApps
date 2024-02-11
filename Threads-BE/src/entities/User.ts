import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Like,
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

  @Column()
  password: string;

  @Column()
  photo_profile: string;

  @Column({ nullable: true })
  bio: string;

  @Column()
  created_at: Date;

  @Column()
  created_by: number;

  @Column()
  updated_at: Date;

  @Column()
  updated_by: number;

  @OneToMany(() => Replies, (replies) => replies.user)
  replies: Replies[];

  @OneToMany(() => Threads, (threads) => threads.user)
  threads: Threads[];

  @OneToMany(() => Following, (following) => following.follower)
  followings: Following[];

  @OneToMany(() => Likes, (likes) => likes.user)
  likes: Likes[];
}
