import faker from '@faker-js/faker';
import * as fs from 'fs';

import {ResumeEntity} from '../../../../src/core/entities/resume/resume-entity';
import {ResumeInteractor} from '../../../../src/core/interfaces/resume-interactor';
import {ResumeInteractorService} from '../../../../src/core/services/resume-interactor-service';

describe('Given resume interactor service', () => {
  let service: ResumeInteractor;

  beforeEach(() => {
    service = new ResumeInteractorService();
  });

  describe('Given pt br find method', () => {
    it('Should render resume by i18n file', () => {
      const resumeDtoMock = {
        publicName: faker.name.firstName(),
        description: faker.lorem.words(),
        profile: {
          label: faker.lorem.word(),
          description: faker.lorem.words(),
        },
        workExperience: {
          title: faker.lorem.word(),
          jobs: [
            {
              start: `${faker.date.month({abbr: true})} ${faker.datatype.number(
                {
                  min: 2000,
                }
              )}`,
              end: `${faker.date.month({abbr: true})} ${faker.datatype.number({
                min: 2000,
              })}`,
              title: faker.lorem.word(),
              description: faker.lorem.words(),
              companyName: faker.company.companyName(),
              achievements: [
                {
                  title: faker.lorem.word(),
                  descriptions: [faker.lorem.words()],
                },
              ],
            },
          ],
        },
      };

      jest
        .spyOn(fs, 'readFileSync')
        .mockReturnValueOnce(JSON.stringify(resumeDtoMock));

      const entity = service.findPtBr();

      expect(entity).toEqual(ResumeEntity.make(resumeDtoMock));
    });
  });
});