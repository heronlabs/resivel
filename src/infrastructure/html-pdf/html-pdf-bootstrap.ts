import {Module, ModuleMetadata} from '@nestjs/common';

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
  ],
  exports: ['ConverterHtmlPdf'],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
