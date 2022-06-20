import {Module, ModuleMetadata} from '@nestjs/common';

import {ResumeService} from './services/resume-service';

export const coreModule: ModuleMetadata = {
  providers: [],
  exports: [ResumeService],
};

@Module(coreModule)
export class CoreBootstrap {}
