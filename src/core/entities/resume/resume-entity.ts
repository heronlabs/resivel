import {ProfileEntity} from './topics/profile-entity';
import {WorkExperienceEntity} from './topics/work-experience-entity';

export class ResumeEntity {
  publicName: string;
  description: string;
  profile: ProfileEntity;
  workExperience: WorkExperienceEntity;

  constructor(partial?: Partial<ResumeEntity>) {
    return Object.assign(this, partial);
  }
}
