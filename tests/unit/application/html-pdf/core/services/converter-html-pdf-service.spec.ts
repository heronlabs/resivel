import {Mock} from 'moq.ts';
import {Page} from 'puppeteer';

import {ConverterHtmlPdfService} from '../../../../../../src/application/html-pdf/core/services/converter-html-pdf-service';
import {browserMock} from '../../../../../__mocks__/browser-mock';
import {PuppeteerNodeMock} from '../../../../../__mocks__/puppeteer-node-mock';

describe('Given converter html pdf service', () => {
  let service: ConverterHtmlPdfService;

  beforeEach(() => {
    service = new ConverterHtmlPdfService(PuppeteerNodeMock);
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

      browserMock.newPage.mockResolvedValue(pageMoq.object());

      await service.fromHtmlToPdf(templateHtml);

      expect(pageMock.pdf).toHaveBeenCalledTimes(1);
    });
  });
});
