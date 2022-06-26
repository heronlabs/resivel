import faker from '@faker-js/faker';
import * as fs from 'fs';
import {Mock} from 'moq.ts';

import {HandlebarsFactory} from '../../../../../../src/infrastructure/html-pdf/application/factories/handlebars-factory';
import {PdfPresenter} from '../../../../../../src/infrastructure/html-pdf/application/presenters/pdf-presenter';
import {ConverterHtmlPdfMock} from '../../../../__mocks__/infrastructure/html-pdf/core/services/converter-html-pdf-mock';

describe('Given pdf presenter', () => {
  let presenter: PdfPresenter;

  beforeEach(() => {
    presenter = new PdfPresenter(ConverterHtmlPdfMock);
  });

  describe('Given an payload with view name containing style', () => {
    it('Should return founded view with css and dynamic data inserted', async () => {
      const payload = {
        __style__: '.title { color: red };',
        foo: faker.datatype.string(),
      };
      const viewName = faker.datatype.uuid();

      const htmlViewFile = `
        <html>
          {{#if author}}
          <style type="text/css">{{ __style__ }}</style>
          {{/if}}
          <body>
            <div class="title">
              {{ foo }}
            </div>
          </body>
        </html>
      `;

      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce(htmlViewFile)
        .mockReturnValueOnce(payload.__style__);

      const handlebarsSpyOn = jest.spyOn(HandlebarsFactory, 'compileTemplate')
        .mockReturnValueOnce(`
        <html>
          <style>${payload.__style__}</style>
          <body>
            <div class="title">
              ${payload.foo}
            </div>
          </body>
        </html>
      `);

      ConverterHtmlPdfMock.fromHtmlToPdf.mockResolvedValueOnce(
        new Mock<Buffer>().object()
      );

      await presenter.envelope(payload, viewName);

      expect(handlebarsSpyOn).toHaveBeenNthCalledWith(1, htmlViewFile, payload);
    });
  });
});
