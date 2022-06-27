import {Module, ModuleMetadata} from '@nestjs/common';

import {PdfPresenter} from './application/presenters/pdf-presenter';
import {ConverterHtmlPdfService} from './core/services/converter-html-pdf-service';

export const htmlPdfModule: ModuleMetadata = {
  providers: [
    {
      provide: 'PuppeteerNode',
      useFactory: () => require('puppeteer'),
    },
    ConverterHtmlPdfService,
    PdfPresenter,
  ],
  exports: [PdfPresenter],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
