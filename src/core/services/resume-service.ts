import {readFileSync} from 'fs';

import {ResumeEntity} from '../entities/resume/resume-entity';
import {Resume} from '../interfaces/resume';

export class ResumeService implements Resume {
  findPtBr(): ResumeEntity {
    const file = readFileSync('./public/i18n/resume-pt-br.json');
    const resumePtBr = JSON.parse(file.toString());
    const resume = ResumeEntity.make(resumePtBr);

    return resume;
  }
}
