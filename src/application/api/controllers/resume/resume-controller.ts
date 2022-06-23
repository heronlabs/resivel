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

import {ResumeInteractor} from '../../../../core/interfaces/resume-interactor';
import {PdfPresenter} from '../../presenters/pdf/pdf-presenter';
import {ResumeQueryDto} from './dtos/resume-query-dto';

@Controller('resume')
export class ResumeController {
  constructor(
    @Inject('ResumeService') private readonly resumeService: ResumeInteractor,
    @Inject('PdfPresenter') private readonly pdfPresenter: PdfPresenter
  ) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  public async getResume(
    @Query() query: ResumeQueryDto,
    @Response({passthrough: true}) res
  ): Promise<StreamableFile> {
    const resume = this.resumeService.findPtBr();

    const response = await this.pdfPresenter.envelope(
      resume,
      'resume-html-pdf-view'
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${query.getFileName()}"`,
    });

    return new StreamableFile(response);
  }
}
