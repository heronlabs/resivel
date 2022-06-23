import faker from '@faker-js/faker';
import {HttpStatus, INestApplication} from '@nestjs/common';
import {Test} from '@nestjs/testing';
import * as request from 'supertest';

import {apiModule} from '../../../../../src/application/api/api-bootstrap';

describe('Given controller for Resume', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule(apiModule).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Given pt-br route', () => {
    it('Should get pdf resume download with default file name', async () => {
      const response = await request(app.getHttpServer()).get('/resume').send();

      expect(response.statusCode).toEqual(HttpStatus.OK);
    });

    it('Should get pdf resume download with custom file name', async () => {
      const customFileName = `${faker.datatype.uuid()}.pdf`;

      const response = await request(app.getHttpServer())
        .get(`/resume?fileName=${customFileName}`)
        .send();

      expect(response.statusCode).toEqual(HttpStatus.OK);
    });
  });
});
