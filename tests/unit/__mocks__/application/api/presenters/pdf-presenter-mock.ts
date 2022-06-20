import {Mock} from 'moq.ts';

import {PdfPresenter} from '../../../../../../src/application/api/presenters/pdf/pdf-presenter';

export const PdfPresenterMock = {
  envelope: jest.fn(),
};

export const pdfPresenterMock = new Mock<PdfPresenter>()
  .setup(mock => mock.envelope)
  .returns(PdfPresenterMock.envelope)
  .object();
