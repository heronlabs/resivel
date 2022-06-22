export interface ConverterHtmlPdf {
  fromHtmlToPdf(html: string): Promise<Buffer>;
}
