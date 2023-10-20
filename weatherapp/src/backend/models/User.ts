import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("app_users")
export class User {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  depth: number;
}