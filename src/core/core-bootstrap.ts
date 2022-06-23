import {Module, ModuleMetadata} from '@nestjs/common';

import {ResumeService} from './services/resume-service';

export const coreModule: ModuleMetadata = {
  providers: [
    {
      useClass: ResumeService,
      provide: 'ResumeService',
    },
  ],
  exports: ['ResumeService'],
};

@Module(coreModule)
export class CoreBootstrap {}
