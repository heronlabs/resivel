import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Query,
  Response,
  StreamableFile,
} from '@nestjs/common';
import {readFileSync} from 'fs';

import {ResumeEntity} from '../../../../core/entities/resume/resume-entity';
import {PdfPresenter} from '../../presenters/pdf/pdf-presenter';
import {ResumeQueryDto} from './dtos/resume-query-dto';

@Controller('resume')
export class ResumeController {
  constructor(@Inject() private readonly pdfPresenter: PdfPresenter) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  public getResume(
    @Query() query: ResumeQueryDto,
    @Response({passthrough: true}) res
  ): StreamableFile {
    const file = readFileSync('./public/i18n/resume-pt-br.json');
    const resumePtBr = JSON.parse(file.toString());
    const resume = ResumeEntity.make(resumePtBr);

    const response = this.pdfPresenter.envelope(resume, 'resume-html-pdf-view');

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${query.getFileName()}"`,
    });

    return new StreamableFile(response);
  }
}
