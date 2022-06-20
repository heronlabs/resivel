import {Inject} from '@nestjs/common';

import {ConverterHtmlPdf} from '../../../../infrastructure/html-pdf/core/interfaces/converter-html-pdf';
import {HeadlessBrowser} from '../../../../infrastructure/html-pdf/core/services/headless-browser';

export class PdfPresenter {
  envelope(payload: unknown, viewName: string): Buffer {
    // TODO: Recebe o nome da view.
    // TODO: Uso o hbs para jogar o payload dentro do html.
    // TODO: Recebe o html-pdf no construtor para gerar o pdf pelo html.
    throw Error('Not implemented');
  }

  constructor(
    @Inject(HeadlessBrowser) private readonly headlessBrowser: ConverterHtmlPdf
  ) {}
}
