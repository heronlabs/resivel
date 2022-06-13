import {Controller, Get, HttpCode, HttpStatus, Inject} from '@nestjs/common';

import {ResumeEntity} from '../../../core/entities/resume/resume-entity';
import {resumePtBr} from '../../../core/entities/resume/resume-pt-br';
import {LatexCraft} from '../../../core/interfaces/latex-craft';
import {ResumeLatexService} from '../../../core/services/latex/resume-latex-service';
import {BaseController} from './base-controller';
import {Envelope} from './base-response';

@Controller('resume')
export class ResumeController extends BaseController {
  constructor(
    @Inject(ResumeLatexService) private readonly resumeLatexService: LatexCraft
  ) {
    super();
  }

  @Get('/pt-br')
  @HttpCode(HttpStatus.OK)
  public ptBr(): Envelope<string> {
    const resume = new ResumeEntity(resumePtBr);

    const latexResume = this.resumeLatexService.createResumeLatex(resume);

    return this.envelope(latexResume);
  }
}
