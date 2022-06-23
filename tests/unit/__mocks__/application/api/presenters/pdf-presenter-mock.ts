import {Mock} from 'moq.ts';

import {PdfPresenter} from '../../../../../../src/application/api/presenters/pdf/pdf-presenter';

export const pdfPresenterMock = {
  envelope: jest.fn(),
};

export const PdfPresenterMock = new Mock<PdfPresenter>()
  .setup(mock => mock.envelope)
  .returns(pdfPresenterMock.envelope)
  .object();
