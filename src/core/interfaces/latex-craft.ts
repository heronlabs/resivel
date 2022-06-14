import {ReadStream} from 'fs';

import {ResumeEntity} from '../entities/resume/resume-entity';

export interface LatexCraft {
  createResumeLatex(resume: ResumeEntity): ReadStream;
}
