import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'user__user',
})
export class User {
  @PrimaryGeneratedColumn({
    type: 'integer',
  })
  $id: number;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column({ default: true, type: 'boolean' })
  isActive: boolean;
}
