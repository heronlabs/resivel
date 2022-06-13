import {JobEntity} from '../../job/job-entity';

export class WorkExperienceEntity {
  title: string;
  jobs: JobEntity[] = [];

  constructor(partial?: Partial<WorkExperienceEntity>) {
    return Object.assign(this, partial);
  }
}
