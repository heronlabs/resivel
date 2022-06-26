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
import {PdfPresenter} from '../../../../infrastructure/html-pdf/application/presenters/pdf-presenter';
import {ResumeQueryDto} from './dtos/resume-query-dto';

@Controller('resume')
export class ResumeController {
  constructor(
    @Inject('ResumeInteractor')
    private readonly resumeInteractor: ResumeInteractor,
    @Inject('PdfPresenter') private readonly pdfPresenter: PdfPresenter
  ) {}

  @Get('/pdf')
  @HttpCode(HttpStatus.OK)
  public async getResume(
    @Query() query: ResumeQueryDto,
    @Response({passthrough: true}) res
  ): Promise<StreamableFile> {
    const resumeEntity = this.resumeInteractor.findPtBr();

    const pdfHtmlTemplateName = 'resume';
    const response = await this.pdfPresenter.envelope(
      resumeEntity,
      pdfHtmlTemplateName
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${query.getFileName()}"`,
    });

    return new StreamableFile(response);
  }
}
