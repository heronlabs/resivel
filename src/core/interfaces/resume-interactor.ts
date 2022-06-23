import {ResumeEntity} from '../entities/resume/resume-entity';

export interface ResumeInteractor {
  findPtBr(): ResumeEntity;
}
