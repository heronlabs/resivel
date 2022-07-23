import {Inject} from '@nestjs/common';
import {readFileSync} from 'fs';

import {ConverterHtmlPdf} from '../../core/interfaces/converter-html-pdf';
import {ConverterHtmlPdfService} from '../../core/services/converter-html-pdf-service';
import {HandlebarsFactory} from '../factories/handlebars-factory';

export class PdfPresenter {
  async envelope(payload: object, viewName: string): Promise<Buffer> {
    const htmlViewFile = readFileSync(
      `./assets/html-pdf-templates/${viewName}/index.hbs`
    ).toString();

    const cssViewFile = readFileSync(
      `./assets/html-pdf-templates/${viewName}/style.hbs`
    ).toString();

    const style = HandlebarsFactory.compileTemplate(cssViewFile, payload);

    const payloadWithStyle = {
      __style__: style,
      ...payload,
    };

    const view = HandlebarsFactory.compileTemplate(
      htmlViewFile,
      payloadWithStyle
    );

    const pdf = await this.converterHtmlPdfService.fromHtmlToPdf(view);

    return pdf;
  }

  constructor(
    @Inject(ConverterHtmlPdfService)
    private readonly converterHtmlPdfService: ConverterHtmlPdf
  ) {}
}
