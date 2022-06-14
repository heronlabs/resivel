import {ResumeController} from '../../../../../src/application/api/controllers/resume-controller';
import {LatexCraftMock} from '../../../__mocks__/latex-craft-mock';
import {ResumePtBrMock} from '../../../__mocks__/resume-pt-br-mock';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    controller = new ResumeController(ResumePtBrMock, LatexCraftMock);
  });

  describe('Given pt-br route', () => {
    it('Should get Lucas Lacerda resume', () => {
      LatexCraftMock.createResumeLatex.mockReturnValueOnce(
        JSON.stringify(ResumePtBrMock)
      );

      const response = controller.ptBr();

      expect(response.payload).toEqual(ResumePtBrMock);
    });
  });
});
