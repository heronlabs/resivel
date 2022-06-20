import faker from '@faker-js/faker';
import {StreamableFile} from '@nestjs/common';
import {Mock} from 'moq.ts';

import {ResumeQueryDto} from '../../../../../src/application/api/controllers/resume/dtos/resume-query-dto';
import {ResumeController} from '../../../../../src/application/api/controllers/resume/resume-controller';
import {
  PdfPresenterMock,
  pdfPresenterMock,
} from '../../../__mocks__/application/api/presenters/pdf-presenter-mock';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    controller = new ResumeController(pdfPresenterMock);
  });

  describe('Given resume route', () => {
    it('Should get pdf resume download with default file name', () => {
      const file = new Mock<Buffer>().object();
      PdfPresenterMock.envelope.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.getResume(resumeQueryDto, responseMock);

      expect(response).toEqual(new StreamableFile(file));
    });

    it('Should get pdf resume download with custom file name', () => {
      const file = new Mock<Buffer>().object();
      PdfPresenterMock.envelope.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      resumeQueryDto.fileName = faker.system.fileName();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.getResume(resumeQueryDto, responseMock);

      expect(response).toEqual(new StreamableFile(file));
    });
  });
});
