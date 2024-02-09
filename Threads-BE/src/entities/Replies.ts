import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Replies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;
}
