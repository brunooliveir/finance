import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDefaultEntity } from './base-default-entity.entity';
import { Scenarios } from './scenarios.entity';

@Entity()
export class Incomes extends BaseDefaultEntity {
  @Column()
  name: string;

  @Column()
  value: number;

  @Column({ nullable: true})
  fees_year: number;

  @Column({ nullable: true})
  fees_month: number;
  
  @Column({ nullable: true})
  initial_date: Date;

  @Column({ nullable: true})
  final_date: Date;

  @OneToMany(() => Scenarios, (scenario) => scenario.incomes)
  scenario: Scenarios[];
}