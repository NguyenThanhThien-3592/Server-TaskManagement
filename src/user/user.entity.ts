import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MinLength, Length, IsEmail, IsPhoneNumber } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(8, 20)
  @Column({ nullable: false })
  username: string;

  @MinLength(8)
  @Column({ nullable: false })
  password: string;

  @IsEmail()
  @Column({ nullable: true })
  email: string;

  @IsPhoneNumber()
  @Column({ nullable: true, length: 10 | 11 })
  phone: string;
}
