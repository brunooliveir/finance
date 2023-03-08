import { IntervalType } from 'src/infra/enums/interval-type.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDefaultEntity } from './base-default-entity.entity';
import { Scenarios } from './scenarios.entity';

@Entity()
export class Salaries extends BaseDefaultEntity {
  @Column()
  name: string;

  @Column({ nullable: true})
  gross: number;

  @Column({ nullable: true})
  net: number;

  @Column({
    type: 'enum',
    enum: [IntervalType.MONTHLY, IntervalType.WEEKLY,IntervalType.DAILY, IntervalType.PUNCTUAL],
    default: IntervalType.MONTHLY,
  })
  interval: IntervalType;

  @OneToMany(() => Scenarios, (scenario) => scenario.salaries)
  scenario: Scenarios[];
}