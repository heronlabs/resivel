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
    it('Should return view with dynamic data inserted', async () => {
      const payload = {
        color: 'red',
        foo: faker.lorem.word(),
      };

      const payloadWithStyle = {
        __style__: `
        <style type="text/css">
          .title { color: ${payload.color} };
        </style>
        `,
        ...payload,
      };

      const cssViewFile = `
        <style type="text/css">.title { color: {{color}} };</style>
      `;

      const htmlViewFile = `
      <html>
        {{ __style__ }}
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
        .mockReturnValueOnce(cssViewFile);

      const view = `
      <html>
        <style>${payloadWithStyle.__style__}</style>
        <body>
          <div class="title">
            <h1>${payload.foo}</h1>
          </div>
        </body>
      </html>
    `;

      const handlebarsSpyOn = jest
        .spyOn(HandlebarsFactory, 'compileTemplate')
        .mockReturnValueOnce(payloadWithStyle.__style__)
        .mockReturnValueOnce(view);

      ConverterHtmlPdfMock.fromHtmlToPdf.mockResolvedValueOnce(
        new Mock<Buffer>().object()
      );

      const viewName = faker.datatype.uuid();
      await presenter.envelope(payload, viewName);

      expect(handlebarsSpyOn).toHaveBeenNthCalledWith(
        2,
        htmlViewFile,
        payloadWithStyle
      );
    });
  });
});
