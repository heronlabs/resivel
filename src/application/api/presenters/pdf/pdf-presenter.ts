import {Inject} from '@nestjs/common';
import {readFileSync} from 'fs';

import {ConverterHtmlPdf} from '../../../../infrastructure/html-pdf/core/interfaces/converter-html-pdf';
import {HandlebarsFactory} from '../../factories/handlebars-factory';

export class PdfPresenter {
  async envelope(payload: unknown, viewName: string): Promise<Buffer> {
    const viewFile = readFileSync(`./views/html/${viewName}.hbs`).toString();

    const view = HandlebarsFactory.compileTemplate(viewFile, payload);

    const pdf = await this.converterHtmlPdfService.fromHtmlToPdf(view);
    return pdf;
  }

  constructor(
    @Inject('ConverterHtmlPdf')
    private readonly converterHtmlPdfService: ConverterHtmlPdf
  ) {}
}
