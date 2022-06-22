import {Mock} from 'moq.ts';
import {PuppeteerNode} from 'puppeteer';

import {BrowserMoq} from './browser-mock';

export const PuppeteerMock = new Mock<PuppeteerNode>()
  .setup(mock => mock.launch)
  .returns(async () => BrowserMoq)
  .object();
