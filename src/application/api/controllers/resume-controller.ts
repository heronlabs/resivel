import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Response,
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
  public createResumePtBr(@Response({passthrough: true}) res): StreamableFile {
    const resume = ResumeEntity.make(this.resumePtBr);

    const pdfFile = this.resumeLatexService.createResumeLatex(resume);

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resume-pt-br.pdf"',
    });

    return new StreamableFile(pdfFile);
  }
}
