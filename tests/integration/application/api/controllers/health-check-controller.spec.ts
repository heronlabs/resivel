import {Test} from '@nestjs/testing';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';
import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check-controller';

describe('Given controller for health check', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    controller = moduleRef.get(HealthCheckController);
  });

  describe('Given pt-br route', () => {
    it('Should get Lucas Lacerda resume', () => {
      const response = controller.status();

      expect(response.payload).toBe('OK');
    });
  });
});
