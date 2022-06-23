import faker from '@faker-js/faker';
import {Test} from '@nestjs/testing';
import {
  createWriteStream,
  existsSync,
  mkdtempSync,
  readdirSync,
  rmdirSync,
} from 'fs';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {ResumeQueryDto} from '../../../../../src/application/api/controllers/resume/dtos/resume-query-dto';
import {ResumeController} from '../../../../../src/application/api/controllers/resume/resume-controller';
import {MigrationPrefix} from '../../../migration-prefix';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(ResumeController);
  });

  beforeAll(() => {
    const folders = readdirSync('./').filter(folderName =>
      folderName.includes(MigrationPrefix.PDF_MIGRATION)
    );

    folders.forEach(folderName => {
      const path = `./${folderName}`;
      if (existsSync(path)) rmdirSync(path, {recursive: true});
    });
  });

  describe('Given pt-br route', () => {
    it('Should get pdf resume download with default file name', async () => {
      const resumeQueryDto = new ResumeQueryDto();
      resumeQueryDto.fileName = faker.system.fileName();
      const responseMock = {
        set: jest.fn(),
      };
      const response = await controller.getResume(resumeQueryDto, responseMock);

      expect(response.getHeaders().type).toEqual('application/octet-stream');
    });

    it('Should get pdf resume download with custom file name', async () => {
      const resumeQueryDto = new ResumeQueryDto();
      const responseMock = {
        set: jest.fn(),
      };

      const response = await controller.getResume(resumeQueryDto, responseMock);

      const migrationFolder = mkdtempSync(MigrationPrefix.PDF_MIGRATION);
      const migrationFile = createWriteStream(
        `./${migrationFolder}/${new Date().getTime()}.pdf`
      );
      response.getStream().pipe(migrationFile);
      expect(response.getHeaders().type).toEqual('application/octet-stream');
    });
  });
});
