import {Inject} from '@nestjs/common';
import {readFileSync} from 'fs';

import {ConverterHtmlPdf} from '../../../../infrastructure/html-pdf/core/interfaces/converter-html-pdf';
import {HandlebarsFactory} from '../../factories/handlebars-factory';

export class PdfPresenter {
  async envelope(payload: unknown, viewName: string): Promise<Buffer> {
    const viewFile = readFileSync(`./views/html/${viewName}.hbs`).toString();

    const view = HandlebarsFactory.compile(viewFile, payload);

    const pdf = await this.headlessBrowserService.fromHtmlToPdf(view);
    return pdf;
  }

  constructor(
    @Inject('HeadlessBrowserService')
    private readonly headlessBrowserService: ConverterHtmlPdf
  ) {}
}
