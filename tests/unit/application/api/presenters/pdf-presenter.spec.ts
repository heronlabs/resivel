import faker from '@faker-js/faker';
import * as fs from 'fs';
import {Mock} from 'moq.ts';

import {HandlebarsFactory} from '../../../../../src/application/api/factories/handlebars-factory';
import {PdfPresenter} from '../../../../../src/application/api/presenters/pdf/pdf-presenter';
import {ConverterHtmlPdfMock} from '../../../__mocks__/infrastructure/html-pdf/converter-html-pdf-mock';

describe('Given pdf presenter', () => {
  let presenter: PdfPresenter;

  beforeEach(() => {
    presenter = new PdfPresenter(ConverterHtmlPdfMock);
  });

  describe('Given an payload with view name', () => {
    it('Should return founded view with dynamic data inserted', async () => {
      const payload = {foo: faker.datatype.string()};
      const viewName = faker.datatype.uuid();

      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce('<html><body>{{ foo }}</body></html>');

      jest
        .spyOn(HandlebarsFactory, 'compile')
        .mockReturnValueOnce(`<html><body>${payload.foo}</body></html>`);

      const pdfMock = new Mock<Buffer>().object();
      ConverterHtmlPdfMock.fromHtmlToPdf.mockResolvedValueOnce(pdfMock);

      const result = await presenter.envelope(payload, viewName);

      expect(result).toEqual(pdfMock);
    });
  });
});
