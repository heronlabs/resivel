import {AchievementEntity} from './achievement-entity';

export class JobEntity {
  start: string;
  end: string;
  title: string;
  description: string;
  companyName: string;
  achievements: AchievementEntity[] = [];

  constructor(partial?: Partial<JobEntity>) {
    return Object.assign(this, partial);
  }
}
