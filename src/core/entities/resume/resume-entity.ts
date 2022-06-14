import {AchievementEntity} from '../job/achievement-entity';
import {JobEntity} from '../job/job-entity';
import {ResumeDto} from './resume-dto';
import {ProfileEntity} from './topics/profile-entity';
import {WorkExperienceEntity} from './topics/work-experience-entity';

export class ResumeEntity {
  publicName: string;
  description: string;
  profile: ProfileEntity;
  workExperience: WorkExperienceEntity;

  static make(resumeDto: ResumeDto): ResumeEntity {
    const resume = new ResumeEntity();
    resume.publicName = resumeDto.publicName;
    resume.description = resumeDto.description;

    const profile = new ProfileEntity();
    profile.label = resumeDto.profile.label;
    profile.description = resumeDto.profile.description;
    resume.profile = profile;

    const workExperience = new WorkExperienceEntity();
    workExperience.title = resumeDto.workExperience.title;
    workExperience.jobs = resumeDto.workExperience.jobs.map(jobDto => {
      const job = new JobEntity();
      job.start = jobDto.start;
      job.end = jobDto.end;
      job.title = jobDto.title;
      job.description = jobDto.description;
      job.companyName = jobDto.companyName;
      job.achievements = jobDto.achievements.map(achievementDto => {
        const achievement = new AchievementEntity();
        achievement.title = achievementDto.title;
        achievement.descriptions = achievementDto.descriptions;
        return achievement;
      });
      return job;
    });
    resume.workExperience = workExperience;

    return resume;
  }
}
