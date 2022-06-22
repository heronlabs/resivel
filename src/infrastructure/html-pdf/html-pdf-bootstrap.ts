import {Module, ModuleMetadata} from '@nestjs/common';
import {PuppeteerNode} from 'puppeteer';

import {HeadlessBrowserService} from './core/services/headless-browser-service';

export const htmlPdfModule: ModuleMetadata = {
  providers: [
    {
      provide: PuppeteerNode,
      useFactory: require('puppeteer'),
    },
  ],
  exports: [HeadlessBrowserService],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
