import faker from '@faker-js/faker';
import {Test} from '@nestjs/testing';
import {existsSync, readdirSync, rmdirSync} from 'fs';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {ResumeQueryDto} from '../../../../../src/application/api/controllers/resume/dtos/resume-query-dto';
import {ResumeController} from '../../../../../src/application/api/controllers/resume/resume-controller';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(ResumeController);
  });

  beforeAll(() => {
    const folders = readdirSync('./').filter(folderName =>
      folderName.includes('resume-latex-service')
    );

    folders.forEach(folderName => {
      const path = `./${folderName}`;
      if (existsSync(path)) rmdirSync(path, {recursive: true});
    });
  });

  describe('Given pt-br route', () => {
    it('Should get pdf resume download with default file name', () => {
      const resumeQueryDto = new ResumeQueryDto();
      resumeQueryDto.fileName = faker.system.fileName();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.createResumePtBr(
        resumeQueryDto,
        responseMock
      );

      expect(response.getHeaders().type).toEqual('application/octet-stream');
    });

    it('Should get pdf resume download with custom file name', () => {
      const resumeQueryDto = new ResumeQueryDto();
      const responseMock = {
        set: jest.fn(),
      };
      const response = controller.createResumePtBr(
        resumeQueryDto,
        responseMock
      );

      expect(response.getHeaders().type).toEqual('application/octet-stream');
    });
  });
});
