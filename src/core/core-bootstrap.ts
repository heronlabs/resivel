import {Module, ModuleMetadata} from '@nestjs/common';

import {ResumeLatexService} from './services/latex/resume-latex-service';

export const coreModule: ModuleMetadata = {
  providers: [ResumeLatexService],
  exports: [ResumeLatexService],
};

@Module(coreModule)
export class CoreBootstrap {}
