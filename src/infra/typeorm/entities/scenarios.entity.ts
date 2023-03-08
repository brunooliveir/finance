import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseDefaultEntity } from './base-default-entity.entity';
import { Incomes } from './incomes.entity';
import { Salaries } from './salaries.entity';
import { Taxes } from './taxes.entity';
import { Users } from './users.entity';

@Entity()
export class Scenarios extends BaseDefaultEntity {
  @Column()
  name: string;
  
  @Column({ nullable: true})
  initial_date: Date;

  @Column({ nullable: true})
  final_date: Date;

  @ManyToOne(() => Incomes, (incomes) => incomes.scenario, {
    eager: true,
  })
  incomes: Incomes;
  
  @ManyToOne(() => Salaries, (salaries) => salaries.scenario, {
    eager: true,
  })
  salaries: Salaries;

  @ManyToOne(() => Taxes, (taxes) => taxes.scenario, {
    eager: true,
  })
  taxes: Salaries;

  @ManyToOne(() => Users, (user) => user.scenario, {
    eager: true,
  })
  user: Users;
}