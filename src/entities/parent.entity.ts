import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "./child.entity";

@Entity()
export class Parent {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @OneToMany(type => Child, child => child.parent)
  @JoinColumn()
  children: Child[];
}