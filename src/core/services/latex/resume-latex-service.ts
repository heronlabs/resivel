import {execSync} from 'child_process';
import {createReadStream, ReadStream, writeFileSync} from 'fs';

import {ResumeEntity} from '../../entities/resume/resume-entity';
import {LatexCraft} from '../../interfaces/latex-craft';
import {ResumeLatexTemplate} from './resume-latex-template';

export class ResumeLatexService implements LatexCraft {
  private fileName = new Date().getTime();
  // FIXME: Pasta temp.
  private createTexFile(resume: ResumeEntity): void {
    writeFileSync(
      `./temp/${this.fileName}.tex`,
      ResumeLatexTemplate.make(resume)
    );
  }

  private createPdfFileFromTex(): void {
    execSync(`cd ./temp && pdflatex ./${this.fileName}.tex`);
  }

  private readPdfFile(): ReadStream {
    const file = createReadStream(`./temp/${this.fileName}.pdf`);

    return file;
  }

  createResumeLatex(resume: ResumeEntity): ReadStream {
    this.createTexFile(resume);

    this.createPdfFileFromTex();

    const file = this.readPdfFile();

    return file;
  }
}
