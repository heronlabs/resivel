import {Mock} from 'moq.ts';
import {PuppeteerNode} from 'puppeteer';

import {BrowserMock} from './browser-mock';

export const PuppeteerNodeMock = new Mock<PuppeteerNode>()
  .setup(mock => mock.launch)
  .returns(async () => BrowserMock)
  .object();
