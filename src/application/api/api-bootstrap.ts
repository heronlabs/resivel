import {Module, ModuleMetadata, ValidationPipe} from '@nestjs/common';
import {APP_PIPE} from '@nestjs/core';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {HealthCheckController} from './controllers/health-check/health-check-controller';
import {ResumeController} from './controllers/resume/resume-controller';
import {ResumePtBrFactory} from './factories/resume-pt-br-factory';

export const apiModule: ModuleMetadata = {
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({transform: true}),
    },
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
