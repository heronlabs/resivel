import {Module, ModuleMetadata, ValidationPipe} from '@nestjs/common';
import {APP_PIPE} from '@nestjs/core';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {HtmlPdfBootstrap} from '../../infrastructure/html-pdf/html-pdf-bootstrap';
import {HealthCheckController} from './controllers/health-check/health-check-controller';
import {ResumeController} from './controllers/resume/resume-controller';
import {JsonPresenter} from './presenters/json/json-presenter';

export const apiModule: ModuleMetadata = {
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({transform: true}),
    },
    {
      useClass: JsonPresenter,
      provide: 'JsonPresenter',
    },
  ],
  imports: [CoreBootstrap, HtmlPdfBootstrap],
  controllers: [HealthCheckController, ResumeController],
};

@Module(apiModule)
export class ApiBootstrap {}
