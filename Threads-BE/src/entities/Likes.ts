import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;
}
