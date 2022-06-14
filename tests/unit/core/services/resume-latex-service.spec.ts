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
      const resume = ResumeEntity.make(ResumePtBrMock);

      const latexResume = service.createResumeLatex(resume);

      expect(latexResume).toEqual(JSON.stringify(resume));
    });
  });
});
