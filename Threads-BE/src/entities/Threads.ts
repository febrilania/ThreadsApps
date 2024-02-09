import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Threads {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  image: string;
}
