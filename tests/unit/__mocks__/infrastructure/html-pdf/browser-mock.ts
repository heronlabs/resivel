import {Mock} from 'moq.ts';
import {Browser} from 'puppeteer';

export const BrowserMock = {
  newPage: jest.fn(),
  close: jest.fn(),
};

export const BrowserMoq = new Mock<Browser>()
  .setup(mock => mock.newPage)
  .returns(BrowserMock.newPage)
  .setup(mock => mock.close)
  .returns(BrowserMock.close)
  .object();
