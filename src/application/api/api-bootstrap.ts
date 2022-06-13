import {Module, ModuleMetadata} from '@nestjs/common';

import {CoreBootstrap} from '../../core/core-bootstrap';
import {ResumeController} from './controllers/resume-controller';

export const apiModule: ModuleMetadata = {
  imports: [CoreBootstrap],
  controllers: [ResumeController],
};

@Module(apiModule)
export class ApiBootstrap {}
