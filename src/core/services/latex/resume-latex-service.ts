import {ResumeEntity} from '../../entities/resume/resume-entity';
import {LatexCraft} from '../../interfaces/latex-craft';

export class ResumeLatexService implements LatexCraft {
  createResumeLatex(resume: ResumeEntity): string {
    console.log('Miau...');

    return `Miado ${resume.publicName}`;
  }
}
