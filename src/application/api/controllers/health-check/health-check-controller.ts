import {Controller, Get, HttpCode, HttpStatus} from '@nestjs/common';

import {BaseController} from '../base/base-controller';
import {Envelope} from '../base/dtos/base-response';

@Controller('health-check')
export class HealthCheckController extends BaseController {
  constructor() {
    super();
  }

  @Get('/status')
  @HttpCode(HttpStatus.OK)
  public status(): Envelope<string> {
    return this.envelope('OK');
  }
}
