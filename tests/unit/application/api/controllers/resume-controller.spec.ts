import faker from '@faker-js/faker';
import {StreamableFile} from '@nestjs/common';
import {Mock} from 'moq.ts';

import {ResumeQueryDto} from '../../../../../src/application/api/controllers/resume/dtos/resume-query-dto';
import {ResumeController} from '../../../../../src/application/api/controllers/resume/resume-controller';
import {ResumeEntity} from '../../../../../src/core/entities/resume/resume-entity';
import {ResumeInteractorMock} from '../../../__mocks__/core/services/resume-interactor-mock';
import {
  PdfPresenterMock,
  pdfPresenterMock,
} from '../../../__mocks__/infrastructure/html-pdf/application/presenters/pdf-presenter-mock';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    controller = new ResumeController(ResumeInteractorMock, PdfPresenterMock);
  });

  describe('Given resume route', () => {
    it('Should get pdf resume download with default file name', async () => {
      ResumeInteractorMock.findPtBr.mockReturnValueOnce(
        new Mock<ResumeEntity>().object()
      );

      const file = new Mock<Buffer>().object();
      pdfPresenterMock.envelope.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      const responseMock = {
        set: jest.fn(),
      };
      const response = await controller.getResume(resumeQueryDto, responseMock);

      expect(response).toEqual(new StreamableFile(file));
    });

    it('Should get pdf resume download with custom file name', async () => {
      ResumeInteractorMock.findPtBr.mockReturnValueOnce(
        new Mock<ResumeEntity>().object()
      );

      const file = new Mock<Buffer>().object();
      pdfPresenterMock.envelope.mockReturnValueOnce(file);

      const resumeQueryDto = new ResumeQueryDto();
      resumeQueryDto.fileName = faker.system.fileName();
      const responseMock = {
        set: jest.fn(),
      };
      const response = await controller.getResume(resumeQueryDto, responseMock);

      expect(response).toEqual(new StreamableFile(file));
    });
  });
});
