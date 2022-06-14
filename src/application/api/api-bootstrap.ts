import {Module, ModuleMetadata} from '@nestjs/common';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {HealthCheckController} from './controllers/health-check-controller';
import {ResumeController} from './controllers/resume-controller';
import {ResumePtBrFactory} from './factories/resume-pt-br-factory';

export const apiModule: ModuleMetadata = {
  providers: [
    {
      useFactory: ResumePtBrFactory.make,
      provide: 'ResumePtBrDto',
    },
  ],
  imports: [CoreBootstrap],
  controllers: [HealthCheckController, ResumeController],
};

@Module(apiModule)
export class ApiBootstrap {}
