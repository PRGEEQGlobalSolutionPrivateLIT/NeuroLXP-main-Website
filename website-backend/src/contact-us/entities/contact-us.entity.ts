import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("contact_us")
export class ContactUs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: "varchar",
    length: 80,
  })
  fullName!: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 2,
  })
  countryCode!: string;

  @Column({
    type: "varchar",
    length: 15,
  })
  phone!: string;

  @Column({
    type: "varchar",
    length: 100,
  })
  subject!: string;

  @Column({
    type: "varchar",
    length: 250,
  })
  message!: string;

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
