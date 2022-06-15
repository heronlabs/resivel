import faker from '@faker-js/faker';
import {StreamableFile} from '@nestjs/common';
import {Mock} from 'moq.ts';

import {ResumeQueryDto} from '../../../../../src/application/api/controllers/resume/dtos/resume-query-dto';
import {ResumeController} from '../../../../../src/application/api/controllers/resume/resume-controller';
import {LatexCraftMock} from '../../../__mocks__/latex-craft-mock';
import {ResumePtBrMock} from '../../../__mocks__/resume-pt-br-mock';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    controller = new ResumeController(ResumePtBrMock, LatexCraftMock);
  });

  describe('Given pt-br route', () => {
    it('Should get pdf resume download with default file name', () => {
      const file = new Mock<Buffer>().object();
      LatexCraftMock.createResumeLatex.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.createResumePtBr(
        resumeQueryDto,
        responseMock
      );

      expect(response).toEqual(new StreamableFile(file));
    });

    it('Should get pdf resume download with custom file name', () => {
      const file = new Mock<Buffer>().object();
      LatexCraftMock.createResumeLatex.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      resumeQueryDto.fileName = faker.system.fileName();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.createResumePtBr(
        resumeQueryDto,
        responseMock
      );

      expect(response).toEqual(new StreamableFile(file));
    });
  });
});
