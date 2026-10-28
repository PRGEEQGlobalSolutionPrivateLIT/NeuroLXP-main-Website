import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("talk_to_expert")
export class TalkToExpert {
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
  interest!: string;

  @Column({
    type: "varchar",
    length: 250,
    nullable: true,
  })
  query!: string | null;

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
