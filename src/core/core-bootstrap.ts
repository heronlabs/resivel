import {Module, ModuleMetadata} from '@nestjs/common';

import {ResumeInteractorService} from './services/resume-interactor-service';

export const coreModule: ModuleMetadata = {
  providers: [
    {
      useClass: ResumeInteractorService,
      provide: 'ResumeInteractor',
    },
  ],
  exports: ['ResumeInteractor'],
};

@Module(coreModule)
export class CoreBootstrap {}
