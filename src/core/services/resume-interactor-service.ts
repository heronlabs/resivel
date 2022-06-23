import {readFileSync} from 'fs';

import {ResumeEntity} from '../entities/resume/resume-entity';
import {ResumeInteractor} from '../interfaces/resume-interactor';

export class ResumeInteractorService implements ResumeInteractor {
  findPtBr(): ResumeEntity {
    const file = readFileSync('./public/i18n/resume-pt-br.json');
    const resumePtBr = JSON.parse(file.toString());
    const resume = ResumeEntity.make(resumePtBr);

    return resume;
  }
}
