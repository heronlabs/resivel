import {Test} from '@nestjs/testing';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {ResumeController} from '../../../../../src/application/api/controllers/resume-controller';

describe('Given controller for Resume', () => {
  let controller: ResumeController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(ResumeController);
  });

  describe('Given pt-br route', () => {
    it('Should get Lucas Lacerda resume', () => {
      const response = controller.ptBr();

      expect(response.payload).toEqual('Miado Lucas Lacerda');
    });
  });
});
