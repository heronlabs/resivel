import {execSync} from 'child_process';
import {createReadStream, mkdtempSync, ReadStream, writeFileSync} from 'fs';

import {ResumeEntity} from '../../entities/resume/resume-entity';
import {LatexCraft} from '../../interfaces/latex-craft';
import {ResumeLatexTemplate} from './resume-latex-template';

export class ResumeLatexService implements LatexCraft {
  private fileName: string;
  private tmpDir: string;

  private createTexFile(resume: ResumeEntity): void {
    writeFileSync(
      `${this.tmpDir}/${this.fileName}.tex`,
      ResumeLatexTemplate.make(resume)
    );
  }

  private createPdfFileFromTex(): void {
    execSync(
      `pdflatex --output-directory=${this.tmpDir} ${this.tmpDir}/${this.fileName}.tex`
    );
  }

  private readPdfFile(): ReadStream {
    const file = createReadStream(`${this.tmpDir}/${this.fileName}.pdf`);

    return file;
  }

  createResumeLatex(resume: ResumeEntity): ReadStream {
    const tmpFolderName = 'resume-latex-service';
    this.tmpDir = mkdtempSync(this.path.join(this.os.tmpdir(), tmpFolderName));
    this.fileName = new Date().getTime().toString();

    this.createTexFile(resume);

    this.createPdfFileFromTex();

    const file = this.readPdfFile();

    return file;
  }

  constructor(
    private readonly os = require('os'),
    private readonly path = require('path')
  ) {}
}
