import {ProfileEntity} from '../profile/profile-entity';
import {AchievementEntity} from '../work-experience/achievement-entity';
import {JobEntity} from '../work-experience/job-entity';
import {WorkExperienceEntity} from '../work-experience/work-experience-entity';
import {ResumeDto} from './resume-dto';

export class ResumeEntity {
  profile: ProfileEntity;
  workExperience: WorkExperienceEntity;

  static make(resumeDto: ResumeDto): ResumeEntity {
    const resume = new ResumeEntity();

    const profile = new ProfileEntity();
    profile.label = resumeDto.profile.label;
    profile.publicName = resumeDto.profile.publicName;
    profile.picture = resumeDto.profile.picture;
    profile.description = resumeDto.profile.description;
    profile.introduction = resumeDto.profile.introduction;
    resume.profile = profile;

    const workExperience = new WorkExperienceEntity();
    workExperience.label = resumeDto.workExperience.label;
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

    // TODO: Criar skills

    return resume;
  }
}
