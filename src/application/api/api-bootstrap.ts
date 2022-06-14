import {Module, ModuleMetadata} from '@nestjs/common';

import {CoreBootstrap} from '../../core/core-bootstrap';
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
  controllers: [ResumeController],
};

@Module(apiModule)
export class ApiBootstrap {}
