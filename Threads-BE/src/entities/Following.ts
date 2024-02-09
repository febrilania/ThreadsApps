import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Following {
  @PrimaryGeneratedColumn()
  id: number;
}
