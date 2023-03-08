import { IntervalType } from 'src/infra/enums/interval-type.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseDefaultEntity } from './base-default-entity.entity';
import { Scenarios } from './scenarios.entity';

@Entity()
export class Taxes extends BaseDefaultEntity {
  @Column()
  name: string;

  @Column()
  value: number;

  @Column({
    type: 'enum',
    enum: [IntervalType.MONTHLY, IntervalType.WEEKLY,IntervalType.DAILY, IntervalType.PUNCTUAL],
    default: IntervalType.MONTHLY,
  })
  interval: IntervalType;

  @OneToMany(() => Scenarios, (scenario) => scenario.taxes)
  scenario: Scenarios[];
}