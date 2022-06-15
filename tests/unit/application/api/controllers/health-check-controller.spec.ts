import {HealthCheckController} from '../../../../../src/application/api/controllers/health-check/health-check-controller';

describe('Given controller for health check', () => {
  let controller: HealthCheckController;

  beforeEach(async () => {
    controller = new HealthCheckController();
  });

  describe('Given status route', () => {
    it('Should get OK', () => {
      const response = controller.status();

      expect(response.payload).toBe('OK');
    });
  });
});
