import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Parent } from "./parent.entity";

@Entity()
export class Child {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @ManyToOne(type => Parent, parent => parent.children)
  parent: Parent;
}