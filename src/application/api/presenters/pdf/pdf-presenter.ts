import {Inject} from '@nestjs/common';
import {readFileSync} from 'fs';

import {ConverterHtmlPdf} from '../../../../infrastructure/html-pdf/core/interfaces/converter-html-pdf';
import {HeadlessBrowserService} from '../../../../infrastructure/html-pdf/core/services/headless-browser-service';

export class PdfPresenter {
  async envelope(payload: unknown, viewName: string): Promise<Buffer> {
    const viewFile = readFileSync(`./view/html/${viewName}.hbs`).toString();

    const Handlebars = require('handlebars');
    const template = Handlebars.compile(viewFile);
    const view = template(payload);

    const pdf = await this.headlessBrowser.fromHtmlToPdf(view);
    return pdf;
  }

  constructor(
    @Inject(HeadlessBrowserService)
    private readonly headlessBrowser: ConverterHtmlPdf
  ) {}
}
