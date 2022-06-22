import {Mock} from 'moq.ts';
import {Page} from 'puppeteer';

import {HeadlessBrowserService} from '../../../../../src/infrastructure/html-pdf/core/services/headless-browser-service';
import {BrowserMock} from '../../../__mocks__/infrastructure/html-pdf/browser-mock';
import {PuppeteerMock} from '../../../__mocks__/infrastructure/html-pdf/puppeteer-mock';

describe('Given headless browser service', () => {
  let service: HeadlessBrowserService;

  beforeEach(() => {
    service = new HeadlessBrowserService(PuppeteerMock);
  });

  describe('Given html template', () => {
    it('Should create pdf from template', async () => {
      const templateHtml = '<html><body><h1>Hello World</h1></body></html>';

      const bufferMoq = new Mock<Buffer>();
      const pageMock = {
        pdf: jest.fn().mockResolvedValue(bufferMoq.object()),
      };

      const pageMoq = new Mock<Page>()
        .setup(mock => mock.setContent)
        .returns(async () => {})
        .setup(mock => mock.pdf)
        .returns(pageMock.pdf)
        .setup(mock => mock.close)
        .returns(async () => {});

      BrowserMock.newPage.mockResolvedValue(pageMoq.object());

      await service.fromHtmlToPdf(templateHtml);

      expect(pageMock.pdf).toHaveBeenNthCalledWith(1);
    });
  });
});
