import {Controller, Get, HttpCode, HttpStatus, Inject} from '@nestjs/common';

import {JsonPresenterDto} from '../../presenters/json/dtos/json-presenter-dto';
import {JsonPresenter} from '../../presenters/json/json-presenter';

@Controller('health-check')
export class HealthCheckController {
  @Get('/status')
  @HttpCode(HttpStatus.OK)
  public status(): JsonPresenterDto<string> {
    return this.jsonPresenter.envelope('OK');
  }

  constructor(@Inject() private readonly jsonPresenter: JsonPresenter) {}
}
