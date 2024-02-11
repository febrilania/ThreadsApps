import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Following {
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

  @ManyToOne(() => User, (user) => user.followings)
  follower: User;

  @ManyToOne(() => User, (user) => user.followings)
  following: User;
}
