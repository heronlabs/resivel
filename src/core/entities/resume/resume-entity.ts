import {v4} from 'uuid';

import {CommunicationEntity} from '../communication/communication-entity';
import {LanguageEntity} from '../communication/language-entity';
import {MetricEntity} from '../communication/metric-entity';
import {ContactEntity} from '../contact/contact-entity';
import {SocialMediaEntity} from '../contact/social-media-entity';
import {EducationEntity} from '../education/education-entity';
import {InstitutionEntity} from '../education/institution-entity';
import {KnowledgeEntity} from '../knowledge/knowledge-entity';
import {SkillPercentageEntity} from '../knowledge/skill-percentage-entity';
import {OpenSourceEntity} from '../open-source/open-source-entity';
import {ProjectEntity} from '../open-source/project-entity';
import {PresentationEntity} from '../presentation/presentation-entity';
import {TopicEntity} from '../presentation/topic-entity';
import {ProfileEntity} from '../profile/profile-entity';
import {AchievementEntity} from '../work-experience/achievement-entity';
import {JobEntity} from '../work-experience/job-entity';
import {WorkExperienceEntity} from '../work-experience/work-experience-entity';
import {ResumeDto} from './resume-dto';

export class ResumeEntity {
  profile: ProfileEntity;
  workExperience: WorkExperienceEntity;
  knowledge: KnowledgeEntity;
  education: EducationEntity;
  contact: ContactEntity;
  presentation: PresentationEntity;
  openSource: OpenSourceEntity;
  communication: CommunicationEntity;

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

    const knowledge = new KnowledgeEntity();
    knowledge.label = resumeDto.knowledge.label;
    knowledge.skillsPercentage = resumeDto.knowledge.skillsPercentage.map(
      skillPercentageDto => {
        const skillPercentage = new SkillPercentageEntity();
        skillPercentage.id = `id-${v4()}`;
        skillPercentage.name = skillPercentageDto.name;
        skillPercentage.levelPercentage = skillPercentageDto.levelPercentage;
        return skillPercentage;
      }
    );
    resume.knowledge = knowledge;

    const education = new EducationEntity();
    education.label = resumeDto.education.label;
    education.institutions = resumeDto.education.institutions.map(
      institutionDto => {
        const institution = new InstitutionEntity();
        institution.duration = institutionDto.duration;
        institution.type = institutionDto.type;
        institution.name = institutionDto.name;
        return institution;
      }
    );
    resume.education = education;

    const contact = new ContactEntity();
    contact.label = resumeDto.contact.label;
    contact.socialMedias = resumeDto.contact.socialMedias.map(
      socialMediasDto => {
        const socialMedias = new SocialMediaEntity();
        socialMedias.name = socialMediasDto.name;
        socialMedias.link = socialMediasDto.link;
        socialMedias.icon = socialMediasDto.icon;
        return socialMedias;
      }
    );
    resume.contact = contact;

    const presentation = new PresentationEntity();
    presentation.label = resumeDto.presentation.label;
    presentation.topics = resumeDto.presentation.topics.map(topicDto => {
      const topic = new TopicEntity();
      topic.name = topicDto.name;
      topic.host = topicDto.host;
      topic.period = topicDto.period;
      return topic;
    });
    resume.presentation = presentation;

    const openSource = new OpenSourceEntity();
    openSource.label = resumeDto.openSource.label;
    openSource.projects = resumeDto.openSource.projects.map(projectDto => {
      const project = new ProjectEntity();
      project.name = projectDto.name;
      project.description = projectDto.description;
      project.holder = projectDto.holder;
      return project;
    });
    resume.openSource = openSource;

    const communication = new CommunicationEntity();
    communication.label = resumeDto.communication.label;
    const metrics = new MetricEntity();
    metrics.reading = resumeDto.communication.metrics.reading;
    metrics.conversation = resumeDto.communication.metrics.conversation;
    metrics.writting = resumeDto.communication.metrics.writting;
    communication.metrics = metrics;
    communication.languages = resumeDto.communication.languages.map(
      languageDto => {
        const language = new LanguageEntity();
        language.name = languageDto.name;
        language.readingPercentageId = `id-${v4()}`;
        language.readingPercentage = languageDto.readingPercentage;
        language.conversationPercentageId = `id-${v4()}`;
        language.conversationPercentage = languageDto.conversationPercentage;
        language.writtingPercentageId = `id-${v4()}`;
        language.writtingPercentage = languageDto.writtingPercentage;
        return language;
      }
    );
    resume.communication = communication;

    return resume;
  }
}
