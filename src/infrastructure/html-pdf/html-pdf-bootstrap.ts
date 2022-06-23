import {Module, ModuleMetadata} from '@nestjs/common';

import {HeadlessBrowserService} from './core/services/headless-browser-service';

export const htmlPdfModule: ModuleMetadata = {
  providers: [
    {
      useClass: HeadlessBrowserService,
      provide: 'HeadlessBrowserService',
    },
    {
      provide: 'PuppeteerNode',
      useFactory: () => require('puppeteer'),
    },
  ],
  exports: ['HeadlessBrowserService'],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
