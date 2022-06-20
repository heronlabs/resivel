import {ConverterHtmlPdf} from '../interfaces/converter-html-pdf';

export class HeadlessBrowser implements ConverterHtmlPdf {
  fromHtmlToPdf(html: string, payload: unknown): Buffer {
    throw new Error('Method not implemented.');
  }
}
