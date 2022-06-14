import * as cp from 'child_process';
import * as fs from 'fs';
import {Mock} from 'moq.ts';

import {ResumeEntity} from '../../../../src/core/entities/resume/resume-entity';
import {LatexCraft} from '../../../../src/core/interfaces/latex-craft';
import {ResumeLatexService} from '../../../../src/core/services/latex/resume-latex-service';
import {ResumePtBrMock} from '../../__mocks__/resume-pt-br-mock';

describe('Given service for craft resume latex', () => {
  let service: LatexCraft;

  beforeEach(async () => {
    service = new ResumeLatexService();
  });

  describe('Given create resume latex method', () => {
    it('Should create resume latex', () => {
      jest.spyOn(fs, 'writeFileSync').mockImplementation(jest.fn());
      jest.spyOn(cp, 'execSync').mockImplementation(jest.fn());
      const pdfFileMock = new Mock<fs.ReadStream>().object();
      jest.spyOn(fs, 'createReadStream').mockReturnValue(pdfFileMock);
      const resume = ResumeEntity.make(ResumePtBrMock);

      const latexResume = service.createResumeLatex(resume);

      expect(latexResume).toEqual(pdfFileMock);
    });
  });
});
