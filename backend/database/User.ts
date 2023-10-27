import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("app_users")
export class User extends BaseEntity{
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  debt: number;
}