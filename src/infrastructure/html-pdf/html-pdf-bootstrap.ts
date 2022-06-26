import {Module, ModuleMetadata} from '@nestjs/common';

import {PdfPresenter} from './application/presenters/pdf-presenter';
import {ConverterHtmlPdfService} from './core/services/converter-html-pdf-service';

export const htmlPdfModule: ModuleMetadata = {
  providers: [
    {
      useClass: ConverterHtmlPdfService,
      provide: 'ConverterHtmlPdf',
    },
    {
      provide: 'PuppeteerNode',
      useFactory: () => require('puppeteer'),
    },
    {
      useClass: PdfPresenter,
      provide: 'PdfPresenter',
    },
  ],
  exports: ['PdfPresenter'],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
