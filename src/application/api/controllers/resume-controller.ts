import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  StreamableFile,
} from '@nestjs/common';

import {ResumeDto} from '../../../core/entities/resume/resume-dto';
import {ResumeEntity} from '../../../core/entities/resume/resume-entity';
import {LatexCraft} from '../../../core/interfaces/latex-craft';
import {ResumeLatexService} from '../../../core/services/latex/resume-latex-service';
import {BaseController} from './base-controller';

@Controller('resume')
export class ResumeController extends BaseController {
  constructor(
    @Inject('ResumePtBrDto') private readonly resumePtBr: ResumeDto,
    @Inject(ResumeLatexService) private readonly resumeLatexService: LatexCraft
  ) {
    super();
  }

  @Get('/pt-br')
  @HttpCode(HttpStatus.OK)
  public ptBr(): StreamableFile {
    const resume = ResumeEntity.make(this.resumePtBr);

    const latexResume = this.resumeLatexService.createResumeLatex(resume);

    return new StreamableFile(latexResume);
  }
}
