import {Module, ModuleMetadata} from '@nestjs/common';

import {HeadlessBrowser} from './core/services/headless-browser';

export const htmlPdfModule: ModuleMetadata = {
  providers: [],
  exports: [HeadlessBrowser],
};

@Module(htmlPdfModule)
export class HtmlPdfBootstrap {}
