import {Module, ModuleMetadata} from '@nestjs/common';

import {ResumeInteractorService} from './services/resume-interactor-service';

export const coreModule: ModuleMetadata = {
  providers: [ResumeInteractorService],
  exports: [ResumeInteractorService],
};

@Module(coreModule)
export class CoreBootstrap {}
