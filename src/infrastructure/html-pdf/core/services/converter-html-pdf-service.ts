import {Inject} from '@nestjs/common';
import {Browser, Page, PuppeteerNode} from 'puppeteer';

import {ConverterHtmlPdf} from '../interfaces/converter-html-pdf';

export class ConverterHtmlPdfService implements ConverterHtmlPdf {
  private async getHtmlPage(
    browser: Browser,
    htmlTemplate: string
  ): Promise<Page> {
    const page: Page = await browser.newPage();

    await page.setContent(htmlTemplate, {
      waitUntil: 'networkidle0',
    });

    return page;
  }

  async fromHtmlToPdf(html: string): Promise<Buffer> {
    const browser = await this.puppeteer.launch({
      args: ['--no-sandbox'],
    });

    const page: Page = await this.getHtmlPage(browser, html);

    const pdfBuffer = await page.pdf({
      printBackground: true,
      format: 'A4',
      displayHeaderFooter: true,
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });

    await page.close();
    await browser.close();

    return pdfBuffer;
  }

  constructor(
    @Inject('PuppeteerNode') private readonly puppeteer: PuppeteerNode
  ) {}
}
