import {Test} from '@nestjs/testing';
import {existsSync, mkdirSync, rmdirSync, writeFileSync} from 'fs';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {ResumeController} from '../../../../../src/application/api/controllers/resume-controller';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeAll(() => {
    const path = './temp';
    if (existsSync(path)) {
      rmdirSync(path, {recursive: true});
      mkdirSync(path);
      writeFileSync(`${path}/.gitkeep`, '');
    }
  });

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(ResumeController);
  });

  describe('Given pt-br route', () => {
    it('Should get Lucas Lacerda resume', () => {
      const response = controller.createResumePtBr();

      expect(response.getHeaders().type).toEqual('application/octet-stream');
    });
  });
});
