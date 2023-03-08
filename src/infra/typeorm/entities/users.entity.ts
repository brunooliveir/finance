import { Roles } from 'src/infra/enums/roles.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDefaultEntity } from './base-default-entity.entity';
import { Scenarios } from './scenarios.entity';

@Entity()
export class Users extends BaseDefaultEntity {
  @Column()
  name: string;

  @Column({ unique: true})
  email: string;

  @Column({ nullable: true})
  password: string;

  @Column({
    type: 'enum',
    enum: [Roles.ADMIN, Roles.DEFAULT],
    default: Roles.DEFAULT,
  })
  roles: Roles;

  @OneToMany(() => Scenarios, (scenario) => scenario.user)
  scenario: Scenarios[];
}