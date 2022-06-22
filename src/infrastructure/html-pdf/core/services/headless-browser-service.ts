import {Inject} from '@nestjs/common';
import {Browser, Page, PuppeteerNode} from 'puppeteer';

import {ConverterHtmlPdf} from '../interfaces/converter-html-pdf';

export class HeadlessBrowserService implements ConverterHtmlPdf {
  private launchBrowser(): Promise<Browser> {
    return this.puppeteer.launch({headless: true, args: ['--no-sandbox']});
  }

  private async getHtmlPage(
    browser: Browser,
    htmlTemplate: string
  ): Promise<Page> {
    const page: Page = await browser.newPage();

    await page.setContent(htmlTemplate);

    return page;
  }

  async fromHtmlToPdf(html: string): Promise<Buffer> {
    const browser = await this.launchBrowser();

    const page: Page = await this.getHtmlPage(browser, html);

    const pdfBuffer = await page.pdf();

    await page.close();
    await browser.close();

    return pdfBuffer;
  }

  constructor(
    @Inject(PuppeteerNode) private readonly puppeteer: PuppeteerNode
  ) {}
}
