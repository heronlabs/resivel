export interface ConverterHtmlPdf {
  fromHtmlToPdf(html: string, payload: unknown): Buffer;
}
