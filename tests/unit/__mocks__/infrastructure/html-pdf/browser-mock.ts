import {Mock} from 'moq.ts';
import {Browser} from 'puppeteer';

export const browserMock = {
  newPage: jest.fn(),
  close: jest.fn(),
};

export const BrowserMock = new Mock<Browser>()
  .setup(mock => mock.newPage)
  .returns(browserMock.newPage)
  .setup(mock => mock.close)
  .returns(browserMock.close)
  .object();
