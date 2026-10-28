import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("book_demo")
export class BookDemo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 150,
  })
  fullName!: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 10,
  })
  countryCode!: string;

  @Column({
    type: "varchar",
    length: 15,
  })
  phone!: string;

  @Column({
    type: "date",
  })
  demoDate!: string;

  @Column({
    type: "varchar",
    length: 5,
  })
  demoTime!: string;

  @Column({
    type: "varchar",
    length: 250,
    nullable: true,
  })
  message!: string | null;

  @Column({
    type: "boolean",
    default: false,
  })
  consent!: boolean;

  @CreateDateColumn({
    type: "timestamp with time zone",
  })
  createdAt!: Date;
}